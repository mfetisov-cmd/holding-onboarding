'use client';

import { useState, useRef, useCallback } from 'react';
import styled, { useTheme, keyframes, css } from 'styled-components';
import { Button } from '@/shared/ui/vivid-ui/components/ButtonV2';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';
import { Flex, Column } from '@/shared/ui/vivid-ui/components/Layout';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Divider } from '@/shared/ui/vivid-ui/components/Divider';
import { Paper } from '@/shared/ui/vivid-ui/components/Paper';
import { Chips } from '@/shared/ui/vivid-ui/components/Chips';
import { ProgressBar } from '@/shared/ui/vivid-ui/components/ProgressBar';
import { Loader } from '@/shared/ui/vivid-ui/components/Loader';
import { ListItem } from '@/shared/ui/vivid-ui/components/ListItem';
import { Flash24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24/Flash24';
import { ReaderStroked24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24/ReaderStroked24';
import { Users24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24/Users24';
import { Textbook24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24/Textbook24';
import { Upload24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24/Upload24';
import { Check24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24/Check24';
import { RecycleBin24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24/RecycleBin24';
import { ArrowBackLeft24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24/ArrowBackLeft24';
import { Close24 } from '@/shared/ui/vivid-ui/components/Icons/Ic24/Close24';
import { DOC_CONFIGS, BUSINESS_TYPES } from './config';
import type { DocConfig } from './config';
import { useFileUpload } from './useFileUpload';
import type { UploadedFile } from './useFileUpload';

/* ─── Styled helpers (only for layout/animation that has no Vivid equivalent) ─── */

const Page = styled.div`
  max-width: 720rem;
  margin: 0 auto;
  min-height: 100vh;
  background: ${(p) => p.theme.token.color.c0};
  padding: ${(p) => p.theme.token.spacingXL};

  @media (max-width: 768px) {
    padding: ${(p) => p.theme.token.spacingL};
  }
`;

const DemoBanner = styled(Paper)`
  padding: ${(p) => p.theme.token.spacingM} ${(p) => p.theme.token.spacingL};
  background: #fffbeb;
  border: 1px solid #fde68a;
  box-shadow: none;
  margin-bottom: ${(p) => p.theme.token.spacingXL};
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8rem); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Screen = styled.div<{ $visible: boolean }>`
  display: ${(p) => (p.$visible ? 'block' : 'none')};
  animation: ${fadeIn} 0.35s ease;
`;

const OfferIconWrap = styled.div`
  width: 72rem;
  height: 72rem;
  border-radius: 20rem;
  background: linear-gradient(135deg, #ede9fe 0%, #f5f3ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(p) => p.theme.token.spacingXL};
`;

const IconCircle = styled.div<{ $bg: string }>`
  width: 44rem;
  height: 44rem;
  border-radius: 12rem;
  background: ${(p) => p.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const UploadZone = styled.div<{ $dragover?: boolean }>`
  border: 2rem dashed ${(p) => (p.$dragover ? p.theme.token.color.c6 : p.theme.token.color.c4)};
  border-radius: ${(p) => p.theme.token.borderRadiusM};
  padding: 28rem 24rem;
  background: ${(p) => (p.$dragover ? p.theme.token.color.c6l : p.theme.token.color.c5)};
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10rem;

  &:hover {
    border-color: ${(p) => p.theme.token.color.c6};
    background: ${(p) => p.theme.token.color.c6l};
  }
`;

const FileItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 14rem;
  padding: 14rem 18rem;
  background: ${(p) => p.theme.token.color.c5};
  border-radius: ${(p) => p.theme.token.borderRadiusS};
  animation: ${fadeIn} 0.3s ease;
`;

const StatusDot = styled.div<{ $status: 'uploading' | 'success' | 'error' }>`
  width: 34rem;
  height: 34rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${(p) =>
    p.$status === 'success'
      ? p.theme.token.color.c9
      : p.$status === 'error'
        ? p.theme.token.color.c8t
        : p.theme.token.color.c6l};
`;

const DeleteBtn = styled.button`
  width: 36rem;
  height: 36rem;
  border: none;
  background: transparent;
  border-radius: ${(p) => p.theme.token.borderRadiusXS};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s;
  &:hover { background: ${(p) => p.theme.token.color.c4}; }
`;

const BackBtn = styled.button`
  width: 52rem;
  height: 52rem;
  border-radius: ${(p) => p.theme.token.borderRadiusRounded};
  background: ${(p) => p.theme.token.color.c5};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s;
  &:hover { background: ${(p) => p.theme.token.color.c4}; }
`;

const ExtractionCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 40rem 0;
`;

const RingWrapper = styled.div`
  position: relative;
  width: 120rem;
  height: 120rem;
  margin-bottom: 40rem;

  svg.ring {
    width: 120rem;
    height: 120rem;
    transform: rotate(-90deg);
  }
`;

const RingLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font: ${(p) => p.theme.token.font.captionMAcc};
  color: ${(p) => p.theme.token.color.c2};
`;

const RingCheckWrap = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(p) => (p.$visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const StepRow = styled.div<{ $state: 'pending' | 'active' | 'done' }>`
  display: flex;
  align-items: center;
  gap: 14rem;
  transition: color 0.3s;
  font: ${(p) =>
    p.$state === 'active'
      ? p.theme.token.font.paragraphSAcc
      : p.theme.token.font.paragraphS};
  color: ${(p) =>
    p.$state === 'done'
      ? p.theme.token.color.c9
      : p.$state === 'active'
        ? p.theme.token.color.c1
        : p.theme.token.color.c2};
`;

const StepIconWrap = styled.div<{ $state: 'pending' | 'active' | 'done' }>`
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s;
  background: ${(p) =>
    p.$state === 'done'
      ? p.theme.token.color.c9t
      : p.$state === 'active'
        ? p.theme.token.color.c6l
        : p.theme.token.color.c5};
`;

/* ─── Icon mapping per doc type ─── */

const DOC_ICON_MAP: Record<string, React.FC<{ color?: string; size?: number }>> = {
  doc: ReaderStroked24,
  users: Users24,
  file: Textbook24,
};

/* ─── Sub-components ─── */

function DocCardRow({ doc }: { doc: DocConfig }) {
  const theme = useTheme();
  const Icon = DOC_ICON_MAP[doc.icon] || ReaderStroked24;
  return (
    <Paper type="gray" style={{ padding: '20rem 24rem' }}>
      <ListItem
        component="div"
        size="large"
        leftIcon={
          <IconCircle $bg={theme.token.color.c0}>
            <Icon color={theme.token.color.c2} size={22} />
          </IconCircle>
        }
        title={doc.name}
        label={doc.desc}
      />
    </Paper>
  );
}

function FileRow({ file, onDelete }: { file: UploadedFile; onDelete: () => void }) {
  const theme = useTheme();
  return (
    <FileItemRow>
      <StatusDot $status={file.status}>
        {file.status === 'uploading' ? (
          <Loader size={18} color={theme.token.color.c6} />
        ) : (
          <Check24 color={theme.token.color.c0} size={16} />
        )}
      </StatusDot>
      <div style={{ flex: 1, minWidth: 0 }}>
        <Typography
          variant="bodyS"
          weight="medium"
          style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {file.name}
        </Typography>
        {file.status === 'uploading' ? (
          <>
            <Typography variant="bodyXS" style={{ color: theme.token.color.c6 }}>
              Uploading… {Math.round(file.progress)}%
            </Typography>
            <Spacer size={1} />
            <ProgressBar value={file.progress} indicatorColor={theme.token.color.c6} />
          </>
        ) : (
          <Typography variant="bodyXS" color="secondary">Uploaded</Typography>
        )}
      </div>
      <DeleteBtn onClick={onDelete}>
        <RecycleBin24 color={theme.token.color.c2} size={18} />
      </DeleteBtn>
    </FileItemRow>
  );
}

function UploadSection({
  doc,
  files,
  onAddFile,
  onRemoveFile,
}: {
  doc: DocConfig;
  files: UploadedFile[];
  onAddFile: (docKey: string, file: File) => void;
  onRemoveFile: (docKey: string, fileId: number) => void;
}) {
  const theme = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragover, setDragover] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragover(false);
      Array.from(e.dataTransfer.files).forEach((f) => onAddFile(doc.key, f));
    },
    [doc.key, onAddFile],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      Array.from(e.target.files || []).forEach((f) => onAddFile(doc.key, f));
      e.target.value = '';
    },
    [doc.key, onAddFile],
  );

  return (
    <div>
      <Flex direction="row" align="center" gap="10rem">
        <Typography
          variant="bodyXS"
          weight="semi-bold"
          color="secondary"
          style={{ textTransform: 'uppercase', letterSpacing: '0.5rem' }}
        >
          {doc.name}
        </Typography>
        <Chips size="xs" style={{ pointerEvents: 'none' }}>Optional</Chips>
      </Flex>
      <Spacer size={3} />
      {files.length === 0 ? (
        <UploadZone
          $dragover={dragover}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragover(true); }}
          onDragLeave={() => setDragover(false)}
          onDrop={handleDrop}
        >
          <Upload24 color={theme.token.color.c2} size={26} />
          <Typography variant="bodyS" weight="medium">Tap to upload or drag and drop</Typography>
          <Typography variant="bodyXS" color="secondary">.pdf, .jpg, .png, .heic — max 10 MB</Typography>
        </UploadZone>
      ) : (
        <Column gap="8rem">
          {files.map((f) => (
            <FileRow key={f.id} file={f} onDelete={() => onRemoveFile(doc.key, f.id)} />
          ))}
        </Column>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.pdf"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
    </div>
  );
}

/* ─── Extraction step ─── */
type StepState = 'pending' | 'active' | 'done';

function ExtractionStep({ label, state }: { label: string; state: StepState }) {
  const theme = useTheme();
  return (
    <StepRow $state={state}>
      <StepIconWrap $state={state}>
        {state === 'active' ? (
          <Loader size={14} color={theme.token.color.c6} />
        ) : state === 'done' ? (
          <Check24 color={theme.token.color.c9} size={14} />
        ) : (
          <div style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: theme.token.color.c3,
          }} />
        )}
      </StepIconWrap>
      <span>{label}</span>
    </StepRow>
  );
}

/* ─── Main Page ─── */

export default function DocUploadPage() {
  const theme = useTheme();
  const [screen, setScreen] = useState(1);
  const [businessType, setBusinessType] = useState('legal_entity');
  const { files, addFile, removeFile, hasAnyUploaded, reset } = useFileUpload();

  const cfg = DOC_CONFIGS[businessType];

  const [extractionPct, setExtractionPct] = useState(0);
  const [extractionDone, setExtractionDone] = useState(false);
  const [stepStates, setStepStates] = useState<StepState[]>(['pending', 'pending', 'pending']);
  const [extractionTitle, setExtractionTitle] = useState('Reading your documents…');
  const [extractionDesc, setExtractionDesc] = useState('This usually takes a few seconds.');
  const extractionRef = useRef(false);

  const startExtraction = useCallback(() => {
    if (extractionRef.current) return;
    extractionRef.current = true;
    setExtractionPct(0);
    setExtractionDone(false);
    setStepStates(['active', 'pending', 'pending']);
    setExtractionTitle('Reading your documents…');
    setExtractionDesc('This usually takes a few seconds.');

    const timeline = [
      { at: 1500, pct: 25, steps: ['active', 'pending', 'pending'] as StepState[], title: 'Reading your documents…' },
      { at: 2500, pct: 45, steps: ['done', 'active', 'pending'] as StepState[], title: 'Extracting information…' },
      { at: 4000, pct: 70, steps: ['done', 'active', 'pending'] as StepState[], title: 'Extracting information…' },
      { at: 5000, pct: 90, steps: ['done', 'done', 'active'] as StepState[], title: 'Pre-filling your application…' },
      { at: 6000, pct: 100, steps: ['done', 'done', 'active'] as StepState[], title: 'Done!' },
    ];

    timeline.forEach((s) => {
      setTimeout(() => {
        setExtractionPct(s.pct);
        setStepStates(s.steps);
        setExtractionTitle(s.title);
      }, s.at);
    });

    setTimeout(() => {
      setStepStates(['done', 'done', 'done']);
      setExtractionDone(true);
      setExtractionTitle('All done!');
      setExtractionDesc(
        'We pre-filled most of your application. Review it and confirm — or change anything you need.',
      );
      extractionRef.current = false;
    }, 6400);
  }, []);

  const goToScreen = (n: number) => {
    setScreen(n);
    if (n === 3) startExtraction();
  };

  const switchType = (type: string) => {
    setBusinessType(type);
    reset();
    setScreen(1);
  };

  const circumference = 2 * Math.PI * 54;
  const strokeOffset = circumference - (extractionPct / 100) * circumference;

  return (
    <Page>
      {/* Demo switcher */}
      <DemoBanner type="gray">
        <Typography
          variant="bodyXS"
          weight="semi-bold"
          style={{ textTransform: 'uppercase', letterSpacing: '0.5rem', color: '#92400e', marginBottom: 8 }}
        >
          Demo: select business type (Germany)
        </Typography>
        <Flex direction="row" gap="8rem" wrap="wrap">
          {BUSINESS_TYPES.map((type) => (
            <Chips
              key={type}
              selected={businessType === type}
              onClick={() => switchType(type)}
              size="small"
            >
              {DOC_CONFIGS[type].label}
            </Chips>
          ))}
        </Flex>
      </DemoBanner>

      {/* ═══ SCREEN 1: Offer ═══ */}
      <Screen $visible={screen === 1}>
        <OfferIconWrap>
          <Flash24 color={theme.token.color.c6} size={36} />
        </OfferIconWrap>

        <Typography variant="h3">{cfg.title}</Typography>
        <Spacer size={3} />
        <Typography variant="bodyM" color="secondary" style={{ maxWidth: 540 }}>
          {cfg.subtitle}
        </Typography>

        <Spacer size={9} />

        <Column gap="12rem">
          {cfg.docs.map((doc) => (
            <DocCardRow key={doc.key} doc={doc} />
          ))}
        </Column>

        <Spacer size={10} />

        <Column gap="12rem">
          <Button variant="primary" size="large" fullWidth onClick={() => goToScreen(2)}>
            Upload documents
          </Button>
          <Button variant="ghost" size="large" fullWidth onClick={() => alert('Skipped — continuing to manual flow')}>
            Skip — I'll fill it in myself
          </Button>
        </Column>
      </Screen>

      {/* ═══ SCREEN 2: Upload ═══ */}
      <Screen $visible={screen === 2}>
        <Typography variant="h3">Upload your documents</Typography>
        <Spacer size={2} />
        <Typography variant="bodyM" color="secondary">
          Upload any of the documents below. We'll extract the information automatically.
        </Typography>

        <Spacer size={8} />

        {cfg.docs.map((doc, i) => (
          <div key={doc.key}>
            {i > 0 && (
              <>
                <Spacer size={8} />
                <Divider />
                <Spacer size={8} />
              </>
            )}
            <UploadSection
              doc={doc}
              files={files[doc.key] || []}
              onAddFile={addFile}
              onRemoveFile={removeFile}
            />
          </div>
        ))}

        <Spacer size={9} />

        <Flex direction="row" align="center" gap="16rem">
          <BackBtn onClick={() => goToScreen(1)}>
            <ArrowBackLeft24 color={theme.token.color.c1} size={22} />
          </BackBtn>
          <Button
            variant="primary"
            size="large"
            fullWidth
            disabled={!hasAnyUploaded}
            onClick={() => goToScreen(3)}
          >
            Continue
          </Button>
        </Flex>
      </Screen>

      {/* ═══ SCREEN 3: Extraction ═══ */}
      <Screen $visible={screen === 3}>
        <ExtractionCenter>
          <RingWrapper>
            <svg className="ring" viewBox="0 0 120 120">
              <circle fill="none" stroke={theme.token.color.c5} strokeWidth="6" cx="60" cy="60" r="54" />
              <circle
                fill="none"
                stroke={extractionDone ? theme.token.color.c9 : theme.token.color.c6}
                strokeWidth="6"
                strokeLinecap="round"
                cx="60" cy="60" r="54"
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
                style={{ transition: 'stroke-dashoffset 0.4s ease, stroke 0.3s ease' }}
              />
            </svg>
            {!extractionDone && <RingLabel>{extractionPct}%</RingLabel>}
            <RingCheckWrap $visible={extractionDone}>
              <Check24 color={theme.token.color.c9} size={40} />
            </RingCheckWrap>
          </RingWrapper>

          <Typography variant="h4">{extractionTitle}</Typography>
          <Spacer size={3} />
          <Typography variant="bodyM" color="secondary" style={{ maxWidth: 420 }}>
            {extractionDesc}
          </Typography>

          <Spacer size={7} />

          <Column gap="12rem" style={{ width: '100%', maxWidth: 380, textAlign: 'left' }}>
            <ExtractionStep label="Reading uploaded documents" state={stepStates[0]} />
            <ExtractionStep label="Extracting business information" state={stepStates[1]} />
            <ExtractionStep label="Pre-filling your application" state={stepStates[2]} />
          </Column>

          {extractionDone && (
            <>
              <Spacer size={10} />
              <div style={{ width: '100%', maxWidth: 380 }}>
                <Button
                  variant="primary"
                  size="large"
                  fullWidth
                  onClick={() => alert('Continuing to review your application…')}
                  style={{ background: theme.token.color.c9 }}
                >
                  Review your application
                </Button>
              </div>
            </>
          )}
        </ExtractionCenter>
      </Screen>
    </Page>
  );
}
