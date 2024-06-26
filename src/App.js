import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { EText } from './shared/components/text';
import { shallow } from 'zustand/shallow';
import axios from 'axios';
import { useStore } from './store';
import { Alert, AlertTitle, Snackbar } from '@mui/material';
import { useState } from 'react';
function App() {

  const [snack, setSnack] = useState({ data: null, visible: false });

  const handleClose = () => {
    setSnack({ data: null, visible: false });
  };
  const selector = (state) => ({
    getComponent: state.getComponent,
    getNodes: state.getNodes,
    getEdges: state.getEdges
  });
  const {
    getEdges,
    getNodes
  } = useStore(selector, shallow);

  const sendRequest = () => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/getNodeDetails',
      data: {
        node: getNodes().length,
        edges: getEdges().length
      }
    }).then(response => {
      const str = `Nodes are - ${response?.data.node}  | Edges are ${response?.data?.edges}`
      setSnack({ data: str, visible: true })
    }).catch((error) => {
      setSnack({ data: error?.message, visible: true })
    }).finally(() => {

    });
  }
  return (
    <div>
      <Snackbar open={snack?.visible} autoHideDuration={3000} message={snack?.data} onClose={handleClose}>
      </Snackbar>
      <div style={{ flex: 1, backgroundColor: '#1c2536', padding: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginRight: 20, alignItems: 'center' }}>
          <div style={{ flex: 4 }}>
            <div style={{ display: 'flex', gap: 10 }}>
              <i class="ph-fill ph-arrow-circle-left" style={{ fontSize: 20, color: 'white' }} />
              <EText title={"Back to the Pipeline"} />
            </div>
          </div>
          <div style={{ display: 'flex', flex: 1, gap: 10, justifyContent: 'flex-end' }}>

            <div style={{ borderRadius: 5, width: 70, height: 26, backgroundColor: '#6366f1', alignContent: 'center', textAlign: 'center' }}>
              <i class="ph-fill ph ph-wrench" style={{ fontSize: 18, color: 'white' }}></i>
            </div>
            <div style={{ borderRadius: 5, width: 70, height: 26, backgroundColor: '#6366f1', alignContent: 'center', textAlign: 'center' }} onClick={sendRequest}>
              <i class="ph-fill ph ph-play" style={{ fontSize: 16, color: 'white' }}></i>
            </div>
            <div style={{ borderRadius: 5, width: 70, height: 26, backgroundColor: '#6366f1', alignContent: 'center', textAlign: 'center' }} >
              <i class="ph-fill ph ph-gear-six" style={{ fontSize: 16, color: 'white' }}></i>
            </div>
          </div>
        </div>
      </div>
      <PipelineToolbar />
      <PipelineUI />
    </div >
  );
}

export default App;
