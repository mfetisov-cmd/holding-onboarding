### How to add new icon.

1. Put svg-file with icon inside `bin/icons-generator/source`
2. Run `npm run generate:icons`
3. Check created icon inside `src/lib/vivid-ui/components/Icons/Ic24`.
4. Add re-export to `src/lib/vivid-ui/components/Icons/Ic24/index.ts`
5. Delete svg-file from `bin/icons-generator/source` to avoid override on next run
6. Profit.