type Props = {
  labels: {
    editor: string;
    blocks: string;
    save: string;
    react: string;
    pdf: string;
  };
  title: string;
};

export function GutenbergFlowDiagram({ labels, title }: Props) {
  return (
    <svg
      viewBox="0 0 1120 420"
      role="img"
      aria-label={title}
      className="h-auto w-full bg-bg-elevated"
    >
      <rect width="1120" height="420" fill="#12161c" />
      <circle cx="900" cy="40" r="180" fill="rgba(201,146,74,0.12)" />
      <circle cx="120" cy="380" r="140" fill="rgba(201,146,74,0.08)" />

      {/* Editor */}
      <rect x="48" y="72" width="260" height="276" rx="2" fill="#0b0d10" stroke="#ebe6df" strokeOpacity="0.12" />
      <text x="68" y="108" fill="#c9924a" fontSize="14" fontFamily="system-ui,sans-serif" letterSpacing="2">
        {labels.editor}
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect
            x="68"
            y={128 + i * 40}
            width="220"
            height="28"
            fill="#12161c"
            stroke="#c9924a"
            strokeOpacity={0.35 + i * 0.08}
          />
          <text
            x="82"
            y={147 + i * 40}
            fill="#9a948a"
            fontSize="12"
            fontFamily="system-ui,sans-serif"
          >
            {labels.blocks}
          </text>
        </g>
      ))}

      {/* Arrow to save */}
      <path d="M320 210 H400" stroke="#c9924a" strokeWidth="2" fill="none" />
      <path d="M392 202 L408 210 L392 218" fill="#c9924a" />

      {/* save() */}
      <rect x="420" y="150" width="280" height="120" rx="2" fill="#0b0d10" stroke="#ebe6df" strokeOpacity="0.12" />
      <text
        x="560"
        y="198"
        textAnchor="middle"
        fill="#ebe6df"
        fontSize="18"
        fontFamily="system-ui,sans-serif"
        fontWeight="600"
      >
        save()
      </text>
      <text
        x="560"
        y="230"
        textAnchor="middle"
        fill="#9a948a"
        fontSize="13"
        fontFamily="system-ui,sans-serif"
      >
        {labels.save}
      </text>

      {/* Split arrows */}
      <path d="M700 190 H760 V120 H820" stroke="#c9924a" strokeWidth="2" fill="none" />
      <path d="M812 112 L828 120 L812 128" fill="#c9924a" />
      <path d="M700 230 H760 V300 H820" stroke="#c9924a" strokeWidth="2" fill="none" />
      <path d="M812 292 L828 300 L812 308" fill="#c9924a" />

      {/* React output */}
      <rect x="840" y="72" width="232" height="96" rx="2" fill="#0b0d10" stroke="#c9924a" strokeOpacity="0.55" />
      <text
        x="956"
        y="128"
        textAnchor="middle"
        fill="#ebe6df"
        fontSize="15"
        fontFamily="system-ui,sans-serif"
      >
        {labels.react}
      </text>

      {/* PDF output */}
      <rect x="840" y="252" width="232" height="96" rx="2" fill="#0b0d10" stroke="#ebe6df" strokeOpacity="0.2" />
      <text
        x="956"
        y="308"
        textAnchor="middle"
        fill="#ebe6df"
        fontSize="15"
        fontFamily="system-ui,sans-serif"
      >
        {labels.pdf}
      </text>
    </svg>
  );
}
