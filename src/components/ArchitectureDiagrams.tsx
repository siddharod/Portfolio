import React from 'react';

interface ArchitectureProps {
  type?: 'arogyamitra' | 'accessiq' | 'mochichat' | 'apex' | 'campus';
  architectureImage?: string;
  comparisonImage?: string;
}

export const ArchitectureDiagram: React.FC<ArchitectureProps> = ({
  type = 'accessiq',
  architectureImage,
  comparisonImage,
}) => {
  const [activeTab, setActiveTab] = React.useState<'flow' | 'source_diagram' | 'comparison'>('flow');

  if (type === 'arogyamitra' && architectureImage) {
    return (
      <div className="space-y-4">
        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 border-b border-[#00A8E1]/20 pb-3">
          <button
            onClick={() => setActiveTab('flow')}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
              activeTab === 'flow'
                ? 'bg-[#00A8E1] text-[#050B18] font-bold shadow-md shadow-[#00A8E1]/20'
                : 'bg-[#101C30] text-[#A8B5C8] hover:text-white hover:bg-[#152542]'
            }`}
          >
            Interactive Data Pipeline
          </button>
          <button
            onClick={() => setActiveTab('source_diagram')}
            className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
              activeTab === 'source_diagram'
                ? 'bg-[#00A8E1] text-[#050B18] font-bold shadow-md shadow-[#00A8E1]/20'
                : 'bg-[#101C30] text-[#A8B5C8] hover:text-white hover:bg-[#152542]'
            }`}
          >
            Verified System Architecture
          </button>
          {comparisonImage && (
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                activeTab === 'comparison'
                  ? 'bg-[#00A8E1] text-[#050B18] font-bold shadow-md shadow-[#00A8E1]/20'
                  : 'bg-[#101C30] text-[#A8B5C8] hover:text-white hover:bg-[#152542]'
              }`}
            >
              Experimental TF-IDF Comparison
            </button>
          )}
        </div>

        {activeTab === 'source_diagram' && (
          <div className="rounded-xl overflow-hidden border border-[#00A8E1]/30 bg-[#050B18] p-2">
            <img
              src={architectureImage}
              alt="ArogyaMitra Verified System Architecture"
              className="w-full h-auto rounded-lg object-contain max-h-[460px] mx-auto"
            />
            <p className="text-[11px] text-[#A8B5C8] text-center mt-2">
              Source Diagram: Retrieval-Based NLP System Architecture for ArogyaMitra Healthcare Assistant
            </p>
          </div>
        )}

        {activeTab === 'comparison' && comparisonImage && (
          <div className="rounded-xl overflow-hidden border border-[#00A8E1]/30 bg-[#050B18] p-2">
            <img
              src={comparisonImage}
              alt="ArogyaMitra Experimental Comparison"
              className="w-full h-auto rounded-lg object-contain max-h-[460px] mx-auto"
            />
            <p className="text-[11px] text-[#A8B5C8] text-center mt-2">
              Experimental Comparison: Baseline Keyword Matching vs Proposed TF-IDF + Cosine Similarity Vectorization
            </p>
          </div>
        )}

        {activeTab === 'flow' && (
          <div className="bg-[#0B1426] border border-[#00A8E1]/25 rounded-xl p-5 overflow-x-auto">
            <div className="min-w-[620px] space-y-4">
              <div className="grid grid-cols-4 gap-3 text-center">
                {/* Step 1 */}
                <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3 relative">
                  <div className="text-[10px] uppercase tracking-wider text-[#48C7FF] font-semibold mb-1">Input Layer</div>
                  <div className="text-xs font-bold text-white">Marathi / English Query</div>
                  <div className="text-[11px] text-[#A8B5C8] mt-1">Medical questions & lab report uploads</div>
                </div>

                {/* Step 2 */}
                <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-[#48C7FF] font-semibold mb-1">NLP Preprocessing</div>
                  <div className="text-xs font-bold text-white">Tokenization & Stopwords</div>
                  <div className="text-[11px] text-[#A8B5C8] mt-1">Marathi stop-word removal & normalization</div>
                </div>

                {/* Step 3 */}
                <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
                  <div className="text-[10px] uppercase tracking-wider text-[#48C7FF] font-semibold mb-1">Inference Engine</div>
                  <div className="text-xs font-bold text-white">TF-IDF & Cosine Similarity</div>
                  <div className="text-[11px] text-[#A8B5C8] mt-1">Similarity scoring over verified corpus</div>
                </div>

                {/* Step 4 */}
                <div className="bg-[#101C30] border border-[#00A8E1]/40 rounded-lg p-3 bg-gradient-to-br from-[#101C30] to-[#00A8E1]/15">
                  <div className="text-[10px] uppercase tracking-wider text-[#48C7FF] font-semibold mb-1">Output Delivery</div>
                  <div className="text-xs font-bold text-white">Guidance & Summary</div>
                  <div className="text-[11px] text-[#A8B5C8] mt-1">Extractive lab summary & doctor directory</div>
                </div>
              </div>

              {/* Data Flow Indicator */}
              <div className="flex items-center justify-between px-6 text-[#48C7FF] text-xs font-mono">
                <span>[User Request]</span>
                <span className="flex-1 border-t border-dashed border-[#00A8E1]/40 mx-4 relative text-center text-[10px] text-[#A8B5C8]">
                  RESTful JSON Transmission
                </span>
                <span>[Verified Response]</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (type === 'accessiq') {
    return (
      <div className="bg-[#0B1426] border border-[#00A8E1]/25 rounded-xl p-5 overflow-x-auto">
        <div className="min-w-[620px] space-y-4">
          <div className="text-xs font-mono text-[#48C7FF] uppercase tracking-wider mb-2">
            System Flow: Geospatial Accessibility Pipeline
          </div>
          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
              <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">Client Interface</div>
              <div className="text-xs font-bold text-white">Streamlit UI</div>
              <div className="text-[11px] text-[#A8B5C8] mt-1">Venue coordinates, ramp & elevator parameters</div>
            </div>
            <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
              <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">Feature Engineering</div>
              <div className="text-xs font-bold text-white">Pandas & NumPy Pipeline</div>
              <div className="text-[11px] text-[#A8B5C8] mt-1">Normalization & categorical encoding</div>
            </div>
            <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
              <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">ML Prediction Core</div>
              <div className="text-xs font-bold text-white">Scikit-Learn Model</div>
              <div className="text-[11px] text-[#A8B5C8] mt-1">Random Forest inference via Joblib serialization</div>
            </div>
            <div className="bg-[#101C30] border border-[#00A8E1]/40 rounded-lg p-3 bg-gradient-to-br from-[#101C30] to-[#00A8E1]/15">
              <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">GIS & Reporting</div>
              <div className="text-xs font-bold text-white">Folium Maps & Analytics</div>
              <div className="text-[11px] text-[#A8B5C8] mt-1">Geospatial overlays & improvement metrics</div>
            </div>
          </div>
          <div className="text-[11px] text-[#A8B5C8] font-mono bg-[#050B18] p-2.5 rounded border border-[#00A8E1]/15 flex justify-between items-center">
            <span>Model Artifact: Scikit-Learn (Joblib serialized)</span>
            <span className="text-[#48C7FF]">Latency: &lt;100ms local inference</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'mochichat') {
    return (
      <div className="bg-[#0B1426] border border-[#00A8E1]/25 rounded-xl p-5 overflow-x-auto">
        <div className="min-w-[620px] space-y-4">
          <div className="text-xs font-mono text-[#48C7FF] uppercase tracking-wider mb-2">
            System Flow: Low-Latency Bi-Directional WebSocket Architecture
          </div>
          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
              <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">Frontend Client</div>
              <div className="text-xs font-bold text-white">React & Tailwind</div>
              <div className="text-[11px] text-[#A8B5C8] mt-1">Optimistic UI & state dispatchers</div>
            </div>
            <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
              <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">Transport Layer</div>
              <div className="text-xs font-bold text-white">Socket.io Client/Server</div>
              <div className="text-[11px] text-[#A8B5C8] mt-1">Persistent full-duplex TCP WebSocket connection</div>
            </div>
            <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
              <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">Application Gateway</div>
              <div className="text-xs font-bold text-white">Node.js & Express</div>
              <div className="text-[11px] text-[#A8B5C8] mt-1">Room namespace isolation & event routers</div>
            </div>
            <div className="bg-[#101C30] border border-[#00A8E1]/40 rounded-lg p-3 bg-gradient-to-br from-[#101C30] to-[#00A8E1]/15">
              <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">Persistence Layer</div>
              <div className="text-xs font-bold text-white">MongoDB Collection</div>
              <div className="text-[11px] text-[#A8B5C8] mt-1">Indexed conversation logs & user sessions</div>
            </div>
          </div>
          <div className="text-[11px] text-[#A8B5C8] font-mono bg-[#050B18] p-2.5 rounded border border-[#00A8E1]/15 flex justify-between items-center">
            <span>Protocol: WebSocket (ws:// / wss://) with HTTP long-polling fallback</span>
            <span className="text-[#48C7FF]">Throughput: Real-time broadcast</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'campus') {
    return (
      <div className="bg-[#0B1426] border border-[#00A8E1]/25 rounded-xl p-5 overflow-x-auto">
        <div className="min-w-[620px] space-y-4">
          <div className="text-xs font-mono text-[#48C7FF] uppercase tracking-wider mb-2">
            System Flow: Campus Navigation & Department Bulletin Pipeline
          </div>
          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
              <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">User Surface</div>
              <div className="text-xs font-bold text-white">Student Portal</div>
              <div className="text-[11px] text-[#A8B5C8] mt-1">Building search, maps & notice feeds</div>
            </div>
            <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
              <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">API Gateways</div>
              <div className="text-xs font-bold text-white">RESTful Endpoints</div>
              <div className="text-[11px] text-[#A8B5C8] mt-1">JSON endpoints for departments & circulars</div>
            </div>
            <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
              <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">Navigation Core</div>
              <div className="text-xs font-bold text-white">GIS Mapping Engine</div>
              <div className="text-[11px] text-[#A8B5C8] mt-1">Wayfinding coordinates & cached offline data</div>
            </div>
            <div className="bg-[#101C30] border border-[#00A8E1]/40 rounded-lg p-3 bg-gradient-to-br from-[#101C30] to-[#00A8E1]/15">
              <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">Data Store</div>
              <div className="text-xs font-bold text-white">Registry Database</div>
              <div className="text-[11px] text-[#A8B5C8] mt-1">Department directories, notices, timetable metadata</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Apex Expense Tracker
  return (
    <div className="bg-[#0B1426] border border-[#00A8E1]/25 rounded-xl p-5 overflow-x-auto">
      <div className="min-w-[620px] space-y-4">
        <div className="text-xs font-mono text-[#48C7FF] uppercase tracking-wider mb-2">
          System Flow: Private Client-First Financial Analytics Engine
        </div>
        <div className="grid grid-cols-4 gap-3 text-center">
          <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
            <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">Data Entry</div>
            <div className="text-xs font-bold text-white">Transaction Dispatcher</div>
            <div className="text-[11px] text-[#A8B5C8] mt-1">Expense/income values, categories, tags</div>
          </div>
          <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
            <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">Computation</div>
            <div className="text-xs font-bold text-white">Aggregation Math</div>
            <div className="text-[11px] text-[#A8B5C8] mt-1">Budget burn rates, threshold analysis</div>
          </div>
          <div className="bg-[#101C30] border border-[#00A8E1]/30 rounded-lg p-3">
            <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">Visualizer</div>
            <div className="text-xs font-bold text-white">Chart Engine</div>
            <div className="text-[11px] text-[#A8B5C8] mt-1">Dynamic category donut & trend graphs</div>
          </div>
          <div className="bg-[#101C30] border border-[#00A8E1]/40 rounded-lg p-3 bg-gradient-to-br from-[#101C30] to-[#00A8E1]/15">
            <div className="text-[10px] uppercase text-[#48C7FF] font-semibold mb-1">Storage Security</div>
            <div className="text-xs font-bold text-white">Local Vault</div>
            <div className="text-[11px] text-[#A8B5C8] mt-1">Zero network transit, encrypted device storage</div>
          </div>
        </div>
      </div>
    </div>
  );
};
