const fs = require('fs');

// Read all component files
const components = [
  'Header.tsx',
  'Home.tsx',
  'HomePage.tsx',
  'Moneyscan.tsx',
  'ToolsHub.tsx',
  'WealthEngine.tsx',
  'BehavioralFinance.tsx',
  'CashFlowMastery.tsx',
  'DebtElimination.tsx',
  'RealEstateCrowdfunding.tsx',
  'HouseHacking.tsx',
  'AIEraCareers.tsx',
  'AICareerTools.tsx',
  'AISkillsMapWorksheet.tsx',
  'SkilledTrades.tsx',
  'TradeOpportunityFinder.tsx',
  'LegalPrivacy.tsx',
  'CompoundCalculator.tsx'
];

let fullCode = `MONEYSCAN WEBSITE - COMPLETE SOURCE CODE
========================================
Generated: April 6, 2026
All React Components and Configuration Files

Send this entire file to your designer.

========================================
FILE: package.json
========================================
`;

// Add package.json
const packageJson = fs.readFileSync('/tmp/sandbox/package.json', 'utf8');
fullCode += packageJson + '\n\n';

// Add App.tsx
fullCode += `========================================
FILE: src/app/App.tsx
========================================
`;
const appTsx = fs.readFileSync('/tmp/sandbox/src/app/App.tsx', 'utf8');
fullCode += appTsx + '\n\n';

// Add all components
for (const comp of components) {
  const path = `/tmp/sandbox/src/app/components/${comp}`;
  if (fs.existsSync(path)) {
    fullCode += `========================================
FILE: src/app/components/${comp}
========================================
`;
    const content = fs.readFileSync(path, 'utf8');
    fullCode += content + '\n\n';
  }
}

// Add styles
fullCode += `========================================
FILE: src/styles/theme.css
========================================
`;
const themeCss = fs.readFileSync('/tmp/sandbox/src/styles/theme.css', 'utf8');
fullCode += themeCss + '\n\n';

fullCode += `========================================
FILE: src/styles/fonts.css
========================================
`;
const fontsCss = fs.readFileSync('/tmp/sandbox/src/styles/fonts.css', 'utf8');
fullCode += fontsCss + '\n\n';

fullCode += `========================================
END OF COMPLETE SOURCE CODE
========================================`;

// Escape for JavaScript string literal
const escaped = fullCode
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

// Generate component
const componentCode = `import { Download } from 'lucide-react';

export default function CodeDownloader() {
  const downloadAllCode = () => {
    const completeCode = \`${escaped}\`;
    const blob = new Blob([completeCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'moneyscan-complete-code.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    alert('✅ Complete code downloaded! This file contains:\\n\\n- package.json\\n- App.tsx\\n- All 18 component files\\n- All style files\\n\\nTotal: ' + Math.round(completeCode.length / 1024) + 'KB\\n\\nCheck your Downloads folder for moneyscan-complete-code.txt');
  };

  return (
    <button
      onClick={downloadAllCode}
      className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-all z-50 font-semibold hover:scale-105"
      title="Download complete source code with all components"
    >
      <Download className="w-5 h-5" />
      <span>Download Complete Code</span>
    </button>
  );
}
`;

fs.writeFileSync('/tmp/sandbox/src/app/components/CodeDownloader.tsx', componentCode);
console.log('✅ CodeDownloader component generated with embedded code');
console.log('Total code size:', Math.round(fullCode.length / 1024), 'KB');
