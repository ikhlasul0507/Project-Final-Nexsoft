import Sidebar from "./pages/header/Sidebar"
import Produk from './pages/body/produk'
import MonitoringStok from './pages/body/MonitoringStok'
import AddMonitoring from './pages/body/AddMonitoring'
import ReportMonitoring from './pages/body/ReportMonitoring'
import DetailMonitoring from './pages/body/DetailMonitoring'

function Data(props) {
  console.log(props)
    return (
        <div>
          <Sidebar {...props}/>
          {
            props.match.url === "/master-produk" ? <Produk {...props}/> :
            props.match.url === "/add-monitoring" ? <AddMonitoring {...props} /> :
            props.match.url === "/report-monitoring" ? <ReportMonitoring {...props} /> :
            props.match.url === "/detail-monitoring" ? <DetailMonitoring {...props} /> :
            props.match.url === "/monitoring-produk" && <MonitoringStok {...props}/>
          }
          
        </div>
    )
}
export default Data;