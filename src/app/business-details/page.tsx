'use client';

import { useState } from 'react';
import styled, { useTheme, keyframes } from 'styled-components';
import { Button } from '@/shared/ui/vivid-ui/components/ButtonV2';
import { Typography } from '@/shared/ui/vivid-ui/components/Typography';
import { Flex, Column } from '@/shared/ui/vivid-ui/components/Layout';
import { Spacer } from '@/shared/ui/vivid-ui/components/Spacer';
import { Divider } from '@/shared/ui/vivid-ui/components/Divider';
import { Input } from '@/shared/ui/vivid-ui/components/Input';
import { NativeSelect } from '@/shared/ui/vivid-ui/components/Select/NativeSelect';
import { Checkbox } from '@/shared/ui/vivid-ui/components/Checkbox';
import { ArrowRight24 } from '@/shared/ui/vivid-ui/components/Icons';
import type { SelectOption } from '@/shared/ui/vivid-ui/components/Select/Select';

/* ─── Options (matching production) ─── */

const COUNTRY_OPTIONS: SelectOption[] = [
  { value: 'DE', title: '🇩🇪  Germany' },
  { value: 'FR', title: '🇫🇷  France' },
  { value: 'IT', title: '🇮🇹  Italy' },
  { value: 'ES', title: '🇪🇸  Spain' },
  { value: 'NL', title: '🇳🇱  Netherlands' },
  { value: 'LU', title: '🇱🇺  Luxembourg' },
  { value: 'AT', title: '🇦🇹  Austria' },
];

const TURNOVER_OPTIONS: SelectOption[] = [
  { value: 'up_to_10k', title: 'Up to €10,000/month (€120K/year)' },
  { value: '10k_50k', title: '€10,000–€50,000/month (€120K–€600K/year)' },
  { value: '50k_100k', title: '€50,000–€100,000/month (€600K–€1.2M/year)' },
  { value: '100k_500k', title: '€100,000–€500,000/month (€1.2M–€6M/year)' },
  { value: '500k_plus', title: 'Above €500,000/month (+€6M/year)' },
];

const HOLDING_OPTIONS: SelectOption[] = [
  { value: 'yes', title: 'Yes' },
  { value: 'no', title: 'No' },
];

const INCOME_SOURCE_OPTIONS: SelectOption[] = [
  { value: 'active', title: 'More than 50% from management fees, services, or revenue through subsidiaries' },
  { value: 'passive', title: 'More than 50% from dividends, interest, rents, or royalties' },
];

type CompanyResult = {
  name: string;
  regNumber: string;
  address: string;
};

type Subsidiary = {
  id: number;
  name: string;
  regNumber: string;
  address: string;
  ownership: string | null;
};

const MOCK_COMPANIES: CompanyResult[] = [
  { name: 'Zalando SE', regNumber: 'HRB 158855 B', address: 'Valeska-Gert-Straße 5, 10243, Berlin' },
  { name: 'Zalando Logistics SE & Co. KG', regNumber: 'HRA 505089', address: 'In der Hochstedter Ecke 1, 99098, Erfurt' },
  { name: 'Zalando Payments GmbH', regNumber: 'HRB 186488 B', address: 'Hedwig-Wachenheim-Straße 7, 10243, Berlin' },
  { name: 'Zalando Marketing Services GmbH', regNumber: 'HRB 200154 B', address: 'Valeska-Gert-Straße 5, 10243, Berlin' },
  { name: 'TechVentures GmbH', regNumber: 'HRB 223344', address: 'Friedrichstraße 100, 10117, Berlin' },
  { name: 'TechVentures Labs UG', regNumber: 'HRB 334455', address: 'Torstraße 75, 10119, Berlin' },
  { name: 'Berlin Digital Solutions AG', regNumber: 'HRB 112233', address: 'Alexanderplatz 1, 10178, Berlin' },
  { name: 'Berlin Fintech Group SE', regNumber: 'HRB 445566', address: 'Potsdamer Platz 11, 10785, Berlin' },
];

/* ─── Styled ─── */

const Page = styled.div`
  max-width: 520rem;
  margin: 0 auto;
  min-height: 100vh;
  background: ${(p) => p.theme.token.color.c0};
  padding: 32rem 24rem;

  @media (max-width: 520px) {
    padding: 24rem 16rem;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12rem;
`;

const BackButton = styled.button`
  width: 36rem;
  height: 36rem;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.2s;
  margin-left: -8rem;

  &:hover {
    background: ${(p) => p.theme.token.color.c5};
  }

  svg {
    width: 20rem;
    height: 20rem;
    color: ${(p) => p.theme.token.color.c3};
  }
`;

const CheckboxRow = styled.label`
  display: flex;
  align-items: center;
  gap: 12rem;
  cursor: pointer;
  padding: 4rem 0;
`;

const slideDown = keyframes`
  from { opacity: 0; max-height: 0; transform: translateY(-8rem); }
  to { opacity: 1; max-height: 500rem; transform: translateY(0); }
`;

const ConditionalSection = styled.div<{ $visible: boolean }>`
  display: ${(p) => (p.$visible ? 'block' : 'none')};
  animation: ${slideDown} 0.35s ease forwards;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8rem); }
  to { opacity: 1; transform: translateY(0); }
`;

const Screen = styled.div<{ $visible: boolean }>`
  display: ${(p) => (p.$visible ? 'block' : 'none')};
  animation: ${fadeIn} 0.3s ease;
`;

const TooltipIcon = styled.button`
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${(p) => p.theme.token.color.c2};

  &:hover {
    color: ${(p) => p.theme.token.color.c3};
  }
`;

/* ── Subsidiaries styled ── */

const TabRow = styled.div`
  display: flex;
  border: 1.5rem solid ${(p) => p.theme.token.color.c4};
  border-radius: ${(p) => p.theme.token.borderRadiusM};
  overflow: hidden;
`;

const Tab = styled.button<{ $active: boolean }>`
  flex: 1;
  padding: 14rem 0;
  font-size: 14rem;
  font-weight: ${(p) => (p.$active ? 600 : 400)};
  color: ${(p) => (p.$active ? p.theme.token.color.c6 : p.theme.token.color.c2)};
  background: ${(p) => (p.$active ? p.theme.token.color.c5 : 'transparent')};
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:not(:last-child) {
    border-right: 1.5rem solid ${(p) => p.theme.token.color.c4};
  }
`;

const SearchBox = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16rem 48rem 16rem 16rem;
  font-size: 16rem;
  border: 1.5rem solid ${(p) => p.theme.token.color.c4};
  border-radius: ${(p) => p.theme.token.borderRadiusM};
  outline: none;
  background: ${(p) => p.theme.token.color.c0};
  color: ${(p) => p.theme.token.color.c6};
  font-family: inherit;

  &::placeholder { color: ${(p) => p.theme.token.color.c2}; }
  &:focus { border-color: ${(p) => p.theme.token.color.c6}; }
`;

const SearchIconWrap = styled.div`
  position: absolute;
  right: 16rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${(p) => p.theme.token.color.c2};
  pointer-events: none;
`;

const ResultsPanel = styled.div`
  border: 1.5rem solid ${(p) => p.theme.token.color.c4};
  border-radius: ${(p) => p.theme.token.borderRadiusM};
  overflow: hidden;
  animation: ${fadeIn} 0.25s ease;
`;

const ResultsHint = styled.div`
  padding: 12rem 16rem;
  border-bottom: 1rem solid ${(p) => p.theme.token.color.c4};
`;

const ResultRow = styled.button<{ $selected?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12rem;
  padding: 16rem 20rem;
  background: ${(p) => (p.$selected ? '#f3f0ff' : p.theme.token.color.c0)};
  border: none;
  border-bottom: 1rem solid ${(p) => p.theme.token.color.c4};
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: background 0.15s;

  &:last-child { border-bottom: none; }
  &:hover { background: ${(p) => (p.$selected ? '#ece7ff' : p.theme.token.color.c5)}; }
`;

const ResultInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ResultArrow = styled.div<{ $selected?: boolean }>`
  width: 36rem;
  height: 36rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: ${(p) => (p.$selected ? p.theme.token.color.c6 : 'transparent')};
  color: ${(p) => (p.$selected ? '#fff' : p.theme.token.color.c2)};
  transition: all 0.2s;

  svg { width: 18rem; height: 18rem; }
`;

const ShowMoreLink = styled.button`
  display: block;
  width: 100%;
  padding: 14rem;
  text-align: center;
  background: none;
  border: none;
  border-top: 1rem solid ${(p) => p.theme.token.color.c4};
  color: ${(p) => p.theme.token.color.c6};
  font-size: 14rem;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;

  &:hover { text-decoration: underline; }
`;

const ManualAddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  margin: 0 auto;
  padding: 12rem 20rem;
  border: 1.5rem solid ${(p) => p.theme.token.color.c4};
  border-radius: ${(p) => p.theme.token.borderRadiusM};
  background: ${(p) => p.theme.token.color.c0};
  color: ${(p) => p.theme.token.color.c6};
  font-size: 14rem;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s;

  &:hover { background: ${(p) => p.theme.token.color.c5}; }

  svg { width: 16rem; height: 16rem; }
`;

const OwnershipRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12rem;
  padding: 16rem 20rem;
  background: #f3f0ff;
  border-radius: ${(p) => p.theme.token.borderRadiusM};
  animation: ${fadeIn} 0.25s ease;
`;

const OwnershipInput = styled.input`
  width: 80rem;
  padding: 10rem 12rem;
  font-size: 16rem;
  border: 1.5rem solid ${(p) => p.theme.token.color.c4};
  border-radius: ${(p) => p.theme.token.borderRadiusS};
  text-align: center;
  outline: none;
  font-family: inherit;
  background: ${(p) => p.theme.token.color.c0};
  color: ${(p) => p.theme.token.color.c6};

  &:focus { border-color: ${(p) => p.theme.token.color.c6}; }
`;

const AddedCard = styled.div`
  display: flex;
  align-items: center;
  gap: 16rem;
  padding: 16rem 20rem;
  background: ${(p) => p.theme.token.color.c5};
  border-radius: ${(p) => p.theme.token.borderRadiusM};
  animation: ${fadeIn} 0.3s ease;
`;

const AddedInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const OwnershipBadge = styled.div`
  padding: 6rem 12rem;
  background: ${(p) => p.theme.token.color.c0};
  border-radius: ${(p) => p.theme.token.borderRadiusS};
  font-weight: 600;
  font-size: 14rem;
  color: ${(p) => p.theme.token.color.c6};
  white-space: nowrap;
`;

const RemoveButton = styled.button`
  width: 36rem;
  height: 36rem;
  border: none;
  background: transparent;
  border-radius: 8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s;

  &:hover { background: ${(p) => p.theme.token.color.c4}; }
  svg { width: 18rem; height: 18rem; color: ${(p) => p.theme.token.color.c2}; }
`;

const CountBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24rem;
  height: 24rem;
  padding: 0 8rem;
  border-radius: 12rem;
  background: ${(p) => p.theme.token.color.c6};
  color: #fff;
  font-size: 13rem;
  font-weight: 600;
`;

/* ─── Icons ─── */

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const QuestionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
  </svg>
);

const TrashIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    style={{ width: 20, height: 20 }}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    style={{ width: 20, height: 20 }}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const EditPenIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    style={{ width: 16, height: 16 }}>
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

/* ─── Page ─── */

export default function BusinessDetailsPage() {
  const theme = useTheme();
  const [screen, setScreen] = useState<'details' | 'subsidiaries'>('details');

  /* ── Business Details state ── */
  const [country, setCountry] = useState<SelectOption | string>({ value: 'DE', title: '🇩🇪  Germany' });
  const [turnover, setTurnover] = useState<SelectOption | string>('');
  const [description, setDescription] = useState('');
  const [brandName, setBrandName] = useState('');
  const [cashWithdrawals, setCashWithdrawals] = useState(false);
  const [isHolding, setIsHolding] = useState<SelectOption | string>('');
  const [incomeSource, setIncomeSource] = useState<SelectOption | string>('');

  /* ── Subsidiaries state ── */
  const [subsidiaries, setSubsidiaries] = useState<Subsidiary[]>([
    { id: 1, name: 'Zalando Logistics SE & Co. KG', regNumber: 'HRA 505089', address: 'In der Hochstedter Ecke 1, 99098, Erfurt', ownership: '25%' },
    { id: 2, name: 'Zalando Payments GmbH', regNumber: 'HRB 186488 B', address: 'Hedwig-Wachenheim-Straße 7, 10243, Berlin', ownership: null },
  ]);
  const [searchTab, setSearchTab] = useState<'name' | 'reg'>('name');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedResult, setSelectedResult] = useState<CompanyResult | null>(null);
  const [ownershipPct, setOwnershipPct] = useState('');
  const [showAllResults, setShowAllResults] = useState(false);
  const [manualMode, setManualMode] = useState(false);
  const [manualName, setManualName] = useState('');
  const [manualRegNum, setManualRegNum] = useState('');
  const [manualCountry, setManualCountry] = useState<SelectOption | string>('');
  const [manualAddress, setManualAddress] = useState('');
  const [pendingOwnership, setPendingOwnership] = useState<Record<number, string>>({});
  let nextId = subsidiaries.length > 0 ? Math.max(...subsidiaries.map((s) => s.id)) + 1 : 1;
  const allOwnershipFilled = subsidiaries.length > 0 && subsidiaries.every((s) => s.ownership !== null);

  const turnoverValue = typeof turnover === 'string' ? turnover : turnover?.value;
  const holdingValue = typeof isHolding === 'string' ? isHolding : isHolding?.value;
  const incomeValue = typeof incomeSource === 'string' ? incomeSource : incomeSource?.value;

  const isDetailsValid =
    turnoverValue &&
    description.trim().length > 0 &&
    holdingValue &&
    (holdingValue !== 'yes' || incomeValue);

  const searchResults = searchQuery.length >= 3
    ? MOCK_COMPANIES.filter((c) => {
        const q = searchQuery.toLowerCase();
        return searchTab === 'name'
          ? c.name.toLowerCase().includes(q)
          : c.regNumber.toLowerCase().includes(q);
      })
    : [];

  const visibleResults = showAllResults ? searchResults : searchResults.slice(0, 3);

  const handleDetailsContinue = () => {
    if (holdingValue === 'yes') {
      setScreen('subsidiaries');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('Business details saved! → Next step: Owners & Decision Makers');
    }
  };

  const addFromSearch = () => {
    if (!selectedResult || !ownershipPct) return;
    setSubsidiaries((prev) => [
      ...prev,
      {
        id: nextId,
        name: selectedResult.name,
        regNumber: selectedResult.regNumber,
        address: selectedResult.address,
        ownership: `${ownershipPct}%`,
      },
    ]);
    resetSearch();
  };

  const manualCountryValue = typeof manualCountry === 'string' ? manualCountry : manualCountry?.value;

  const addManual = () => {
    if (!manualName.trim() || !ownershipPct) return;
    const countryLabel = COUNTRY_OPTIONS.find((c) => c.value === manualCountryValue)?.title || '';
    setSubsidiaries((prev) => [
      ...prev,
      {
        id: nextId,
        name: manualName.trim(),
        regNumber: manualRegNum.trim(),
        address: [manualAddress.trim(), countryLabel].filter(Boolean).join(', '),
        ownership: `${ownershipPct}%`,
      },
    ]);
    resetSearch();
  };

  const resetSearch = () => {
    setSearchQuery('');
    setSelectedResult(null);
    setOwnershipPct('');
    setShowAllResults(false);
    setManualMode(false);
    setManualName('');
    setManualRegNum('');
    setManualCountry('');
    setManualAddress('');
  };

  const confirmOwnership = (id: number) => {
    const pct = pendingOwnership[id];
    if (!pct) return;
    setSubsidiaries((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ownership: `${pct}%` } : s)),
    );
    setPendingOwnership((prev) => { const next = { ...prev }; delete next[id]; return next; });
  };

  const removeSubsidiary = (id: number) => {
    setSubsidiaries((prev) => prev.filter((s) => s.id !== id));
  };

  const handleSubsidiariesContinue = () => {
    console.log('Subsidiaries submitted:', subsidiaries);
    alert(
      `Saved ${subsidiaries.length} subsidiar${subsidiaries.length === 1 ? 'y' : 'ies'}! → Next step: Owners & Decision Makers`,
    );
  };

  return (
    <Page>
      {/* ═══════════ SCREEN 1: Business Details ═══════════ */}
      <Screen $visible={screen === 'details'}>

        {/* ── Header: back + title (matches prod layout) ── */}
        <HeaderRow>
          <BackButton aria-label="Go back" onClick={() => window.history.back()}>
            <ArrowLeftIcon />
          </BackButton>
          <Typography variant="h3">Business details</Typography>
        </HeaderRow>

        <Spacer size={8} />

        {/* ── Country ── */}
        <Typography variant="bodyM" color={theme.token.color.c2}>
          Select the primary country of business activity
        </Typography>
        <Spacer size={4} />

        <NativeSelect
          id="country"
          placeholder="Select country"
          options={COUNTRY_OPTIONS}
          value={country}
          onChange={(val) => setCountry(val)}
          size="large"
        />

        <Spacer size={4} />

        {/* ── Turnover ── */}
        <NativeSelect
          id="turnover"
          label="Expected turnover"
          placeholder="Select turnover range"
          options={TURNOVER_OPTIONS}
          value={turnover}
          onChange={(val) => setTurnover(val)}
          size="large"
        />

        <Spacer size={4} />

        {/* ── Holding company ── */}
        <NativeSelect
          id="isHolding"
          label="Is your company a holding?"
          placeholder="Select"
          options={HOLDING_OPTIONS}
          value={isHolding}
          onChange={(val) => {
            setIsHolding(val);
            const v = typeof val === 'string' ? val : val?.value;
            if (v !== 'yes') setIncomeSource('');
          }}
          size="large"
        />

        {/* ── Conditional: primary income source (Active vs Passive NFE) ── */}
        <ConditionalSection $visible={holdingValue === 'yes'}>
          <Spacer size={4} />
          <NativeSelect
            id="incomeSource"
            label="How does your company primarily generate income?"
            placeholder="Select..."
            options={INCOME_SOURCE_OPTIONS}
            value={incomeSource}
            onChange={(val) => setIncomeSource(val)}
            size="large"
          />
        </ConditionalSection>

        <Spacer size={4} />

        {/* ── Business description ── */}
        <Input
          id="description"
          label="Describe your business and revenue sources"
          placeholder=""
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
          size="large"
        />

        <Spacer size={4} />

        {/* ── Brand name with ? tooltip ── */}
        <Input
          id="brandName"
          label="Brand name used for payments (optional)"
          placeholder=""
          value={brandName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBrandName(e.target.value)}
          size="large"
          rightIcon={
            <TooltipIcon type="button" title="The trading name your customers see on payment receipts">
              <QuestionIcon />
            </TooltipIcon>
          }
        />

        <Spacer size={6} />

        {/* ── Cash withdrawals toggle (checkbox, matches prod) ── */}
        <CheckboxRow>
          <Checkbox
            checked={cashWithdrawals}
            size="medium"
            onChange={() => setCashWithdrawals(!cashWithdrawals)}
          />
          <Typography variant="bodyM">
            I plan to make occasional cash withdrawals
          </Typography>
        </CheckboxRow>

        <Spacer size={10} />

        {/* ── Save & Continue ── */}
        <Button
          variant="primary"
          size="large"
          fullWidth
          disabled={!isDetailsValid}
          RightIconComponent={ArrowRight24}
          onClick={handleDetailsContinue}
        >
          Save & Continue
        </Button>

        <Spacer size={6} />
      </Screen>

      {/* ═══════════ SCREEN 2: Subsidiaries ═══════════ */}
      <Screen $visible={screen === 'subsidiaries'}>
        <HeaderRow>
          <BackButton
            aria-label="Go back"
            onClick={() => {
              setScreen('details');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <ArrowLeftIcon />
          </BackButton>
          <Typography variant="h3">Add subsidiary</Typography>
        </HeaderRow>

        <Spacer size={8} />

        {/* ── Search section ── */}
        <Typography variant="h4">Find your subsidiary</Typography>
        <Spacer size={6} />

        <TabRow>
          <Tab $active={searchTab === 'name'} onClick={() => { setSearchTab('name'); setSearchQuery(''); setSelectedResult(null); setShowAllResults(false); }}>
            By company name
          </Tab>
          <Tab $active={searchTab === 'reg'} onClick={() => { setSearchTab('reg'); setSearchQuery(''); setSelectedResult(null); setShowAllResults(false); }}>
            By registration number
          </Tab>
        </TabRow>

        <Spacer size={4} />

        {!manualMode && (
          <>
            <SearchBox>
              <SearchInput
                placeholder="Type here"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setSelectedResult(null); setShowAllResults(false); }}
              />
              <SearchIconWrap><SearchIcon /></SearchIconWrap>
            </SearchBox>

            {searchQuery.length > 0 && searchQuery.length < 3 && (
              <>
                <Spacer size={2} />
                <Typography variant="bodyS" color={theme.token.color.c6}>
                  Enter at least 3 characters
                </Typography>
              </>
            )}

            {/* ── Search results ── */}
            {searchQuery.length >= 3 && (
              <>
                <Spacer size={4} />
                {searchResults.length > 0 ? (
                  <ResultsPanel>
                    <ResultsHint>
                      <Typography variant="bodyS" color={theme.token.color.c2}>
                        Keep typing to narrow your search
                      </Typography>
                    </ResultsHint>
                    {visibleResults.map((r) => {
                      const isSelected = selectedResult?.regNumber === r.regNumber;
                      return (
                        <ResultRow
                          key={r.regNumber}
                          $selected={isSelected}
                          onClick={() => setSelectedResult(isSelected ? null : r)}
                        >
                          <ResultInfo>
                            <Typography variant="bodySAcc">{r.name}</Typography>
                            <Spacer size={0.5} />
                            <Typography variant="bodyXS" color={theme.token.color.c2}>
                              {r.regNumber} · {r.address}
                            </Typography>
                          </ResultInfo>
                          <ResultArrow $selected={isSelected}>
                            <ChevronRight />
                          </ResultArrow>
                        </ResultRow>
                      );
                    })}
                    {searchResults.length > 3 && !showAllResults && (
                      <ShowMoreLink onClick={() => setShowAllResults(true)}>
                        Show more
                      </ShowMoreLink>
                    )}
                  </ResultsPanel>
                ) : (
                  <Typography variant="bodyS" color={theme.token.color.c2}>
                    No companies found. Try a different search or add manually.
                  </Typography>
                )}
              </>
            )}
          </>
        )}

        {/* ── Manual entry mode ── */}
        {manualMode && (
          <>
            <Input
              id="manualName"
              label="Company name"
              placeholder="e.g. Tech Solutions GmbH"
              value={manualName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setManualName(e.target.value)}
              size="large"
            />
            <Spacer size={4} />
            <Input
              id="manualRegNum"
              label="Registration number"
              placeholder="e.g. HRB 12345"
              value={manualRegNum}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setManualRegNum(e.target.value)}
              size="large"
            />
            <Spacer size={4} />
            <NativeSelect
              label="Country"
              value={manualCountry}
              onChange={setManualCountry}
              options={COUNTRY_OPTIONS}
              size="large"
            />
            <Spacer size={4} />
            <Input
              id="manualAddress"
              label="Address"
              placeholder="e.g. Friedrichstraße 100, 10117 Berlin"
              value={manualAddress}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setManualAddress(e.target.value)}
              size="large"
            />
          </>
        )}

        {/* ── Ownership % input (shown after selecting a result or in manual mode) ── */}
        {(selectedResult || manualMode) && (
          <>
            <Spacer size={4} />
            <OwnershipRow>
              <Typography variant="bodySAcc" style={{ flex: 1 }}>
                {selectedResult ? selectedResult.name : manualName || 'New company'}
              </Typography>
              <Typography variant="bodyS" color={theme.token.color.c2}>Ownership</Typography>
              <OwnershipInput
                placeholder="%"
                value={ownershipPct}
                onChange={(e) => setOwnershipPct(e.target.value.replace(/[^0-9.]/g, ''))}
                autoFocus
              />
              <Button
                variant="primary"
                size="small"
                disabled={!ownershipPct || (manualMode && (!manualName.trim() || !manualCountryValue))}
                onClick={manualMode ? addManual : addFromSearch}
              >
                Add
              </Button>
            </OwnershipRow>
          </>
        )}

        <Spacer size={6} />

        {/* ── Add data manually link ── */}
        {!manualMode && (
          <ManualAddButton onClick={() => { setManualMode(true); setSearchQuery(''); setSelectedResult(null); }}>
            <EditPenIcon />
            Add data manually
          </ManualAddButton>
        )}
        {manualMode && (
          <ManualAddButton onClick={() => { setManualMode(false); setManualName(''); setManualRegNum(''); setOwnershipPct(''); }}>
            <SearchIcon />
            Search instead
          </ManualAddButton>
        )}

        {/* ── Added subsidiaries list (below search) ── */}
        {subsidiaries.length > 0 && (
          <>
            <Spacer size={8} />
            <Divider />
            <Spacer size={6} />

            <Flex direction="row" align="center" gap="10rem">
              <Typography variant="labelMAcc">Added</Typography>
              <CountBadge>{subsidiaries.length}</CountBadge>
            </Flex>

            <Spacer size={4} />

            <Column gap="8rem">
              {subsidiaries.map((sub) => (
                <AddedCard key={sub.id}>
                  <AddedInfo>
                    <Typography variant="bodySAcc">{sub.name}</Typography>
                    <Spacer size={0.5} />
                    <Typography variant="bodyXS" color={theme.token.color.c2}>
                      {sub.regNumber}{sub.address ? ` · ${sub.address}` : ''}
                    </Typography>
                  </AddedInfo>
                  {sub.ownership ? (
                    <OwnershipBadge>{sub.ownership}</OwnershipBadge>
                  ) : (
                    <>
                      <OwnershipInput
                        placeholder="%"
                        value={pendingOwnership[sub.id] || ''}
                        onChange={(e) =>
                          setPendingOwnership((prev) => ({
                            ...prev,
                            [sub.id]: e.target.value.replace(/[^0-9.]/g, ''),
                          }))
                        }
                      />
                      <Button
                        variant="primary"
                        size="small"
                        disabled={!pendingOwnership[sub.id]}
                        onClick={() => confirmOwnership(sub.id)}
                      >
                        OK
                      </Button>
                    </>
                  )}
                  <RemoveButton onClick={() => removeSubsidiary(sub.id)} aria-label="Remove">
                    <TrashIcon />
                  </RemoveButton>
                </AddedCard>
              ))}
            </Column>
          </>
        )}

        <Spacer size={10} />

        <Button
          variant="primary"
          size="large"
          fullWidth
          disabled={!allOwnershipFilled}
          RightIconComponent={ArrowRight24}
          onClick={handleSubsidiariesContinue}
        >
          Save & Continue
        </Button>

        <Spacer size={6} />
      </Screen>
    </Page>
  );
}
