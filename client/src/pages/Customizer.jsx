import React, {useState, useEffect} from 'react'
import {AnimatePresence, motion} from 'framer-motion';
import {useSnapshot} from 'valtio';

import config from '../config/config';
import state from '../store';
import {download} from '../assets';
import {downloadCanvasToImage, reader} from '../config/helpers';
import {EditorTabs, FilterTabs, DecalTypes} from '../config/constants';
import {fadeAnimation, slideAnimation} from '../config/motion';
import {ColorPicker, CustomButton, FilePicker, Tab, LogoSelection} from '../components';

const Customizer = () => {
    const snap = useSnapshot(state);

    const [file, setFile] = useState('');
    const [prompt, setPromt] = useState('');
    const [generatingImg, setGeneratingImg] = useState(false);
    
    const [activeEditorTab, setActiveEditorTab] = useState("");
    const [activeFilterTab, setActiveFilterTab] = useState({logoShirt: true, stylishShirt:false});

    const [showLogoSelection, setShowLogoSelection] = useState(false);

    const [selectedLogo, setSelectedLogo] = useState(state.selectedLogo);

    const handleLogoSelection = (logo) => {
        setSelectedLogo(logo);
        state.selectedLogo = logo;
    };

    const generateTabContent = () => {
        if (activeEditorTab === "colorpicker") {
          return <ColorPicker />;
        } else if (activeEditorTab === "logo") {
            return <LogoSelection />;
        }
        return null;
      };

    const generateLogoContent = () => {
        if (activeFilterTab === "logoShirt") {
          return <LogoSelection />;
        }
        return null;
      };

    const handleTabClick = (tabName) => {
        if (activeEditorTab === tabName) {
        setActiveEditorTab('');
        } else {
        setActiveEditorTab(tabName);
        }
    };
    const handleDecals = (type, result) => {
       const decalType = DecalTypes[type];
       state[decaltype.stateProperty] = result;
       if(!activeFilterTab[decalType.filterTab]) {
           handleActiveFilterTab(decalType.filterTab)
       }
    }

    const handleActiveFilterTab = (tabName) => {
        switch (tabName) {
            case "logoShirt":
                if (state.isLogoTexture) {
                    state.isLogoTexture = false;
                } else {
                    state.isLogoTexture = true;
                }
                break;
            case "stylishShirt":
                    state.isFullTexture = !activeFilterTab[tabName];
            default:
                state.isLogoTexture = true;
                state.isFullTexture = false; 
        }
    }

    const readFile = (type) => {
        reader(file)
            .then((result) => {
                handleDecals(type, result);
                setActiveEditorTab("");
            })
    }

    const openLogoSelection = () => {
        setShowLogoSelection(true);
      };
    
      // Function to close the LogoSelection component
      const closeLogoSelection = () => {
        setShowLogoSelection(false);
      };

    return (
        <AnimatePresence>
            {!snap.intro && (
                <>
                
                 <motion.div key="custom" className="absolute top-0 left-0 z-10" {...slideAnimation('left')}>
                    
                     <div className="flex items-center min-h-screen">
                         <div className="editortabs-container tabs">
                            {EditorTabs.map((tab)=> (
                            <Tab
                                key = {tab.name}
                                tab={tab}
                                handleClick={() => handleTabClick(tab.name)}
                            />
                            ))}
                            {generateTabContent()}
                         </div>
                     </div>
                 </motion.div>
                 

                 <motion.div 
                    className="absolute z-10 top-5 right-5" 
                    {...fadeAnimation}>
                    <CustomButton 
                        type="filled" 
                        title="Go Back"
                        handleClick={() => state.intro=true}
                        customStyles = "w-fit px-4 py-2.5 font-bold text-sm"
                    />

                 </motion.div>
                          
                 <motion.div 
                    className="filtertabs-container"
                    {...slideAnimation('up')}
                 >
                    
                    {FilterTabs.map((tab)=> (
                        <Tab
                            key = {tab.name} //takes care of team things
                            tab={tab}
                            isFilterTab
                            isActiveTab = {activeFilterTab[tab.name]} 
                            handleClick={()=>handleActiveFilterTab(tab.name)}
                        />
                    ))}

                
                 </motion.div>

                 <div>
                </div>

                </>
            )}
        </AnimatePresence>
    )
}

export default Customizer
