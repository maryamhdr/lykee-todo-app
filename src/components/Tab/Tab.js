import {useState} from "react";
import TAB_STATE from "../../constants/tabState";
import './tab.scss';

const Tab = ({tabToggled}) => {
    const [activeTab, setActiveTab] = useState(TAB_STATE.all);

    const toggleActiveTab = (tab) => {
        setActiveTab(tab);
        tabToggled(tab);
    }

    return (
        <div className="tab-container">
            <div className={`tab ${activeTab === TAB_STATE.all ? "active-tab" : ""}`}
                 onClick={() => toggleActiveTab(TAB_STATE.all)}>
                <span className="tab-badge all-badge"></span>
                All
            </div>
            <div className="dash-line"></div>
            <div className={`tab ${activeTab === TAB_STATE.inProgress ? "active-tab" : ""}`}
                 onClick={() => toggleActiveTab(TAB_STATE.inProgress)}>
                <span className="tab-badge in-progress-badge"></span>
                In Progress
            </div>
            <div className="dash-line second-dash-line"></div>
            <div className={`tab ${activeTab === TAB_STATE.completed ? "active-tab" : ""}`}
                 onClick={() => toggleActiveTab(TAB_STATE.completed)}>
                <span className="tab-badge completed-badge"></span>
                Completed
            </div>
        </div>
    )
}

export default Tab;