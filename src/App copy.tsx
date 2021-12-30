import React from 'react';
import './App.css';
import { ActionButton, DefaultButton, Dropdown, DropdownMenuItemType, IDropdownOption, MessageBar, MessageBarType, Panel, PanelType, Pivot, PivotItem, PrimaryButton, Spinner, SpinnerSize, Stack, TextField } from "@fluentui/react";
//import { ActionButton, DefaultButton, Dropdown, DropdownMenuItemType, IDropdownOption, MessageBar, MessageBarType, Panel, PanelType, Pivot, PivotItem, PrimaryButton, Spinner, SpinnerSize, Stack, TextField } from "office-ui-fabric-react";
import { useBoolean } from '@fluentui/react-hooks';
import AZSettingsPanel, { sasUrl } from './AZSettingsPanel';



function App2() {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
  // eslint-disable-next-line
  const [isFailed, { setTrue: showError, setFalse: dismissError }] = useBoolean(true);
  // eslint-disable-next-line
  const [isLoading, { setTrue: onLoad, setFalse: loadCompleted }] = useBoolean(true);
  const options: IDropdownOption[] = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const containers: sasUrl[] = [
    {name:"primo1", sasUrl:"http://www.s8casa.it"},
    {name:"primo2", sasUrl:"http://www.s8casa.it"},
    {name:"primo3", sasUrl:"http://www.s8casa.it"},
    {name:"primo4", sasUrl:"http://www.s8casa.it"},
    {name:"primo5", sasUrl:"http://www.s8casa.it"},
    {name:"primo6", sasUrl:"http://www.s8casa.it"},
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
    {name:"primo7", sasUrl:"http://www.s8casa.it"},  
  ];
  const onRenderFooterContent = React.useCallback(
    () => (
      <div>
        <PrimaryButton onClick={dismissPanel}>Save</PrimaryButton>
        <DefaultButton onClick={dismissPanel}>Test</DefaultButton>
      </div>
    ),
    [dismissPanel],
  );
  setTimeout(loadCompleted, 5000);


  const settingsContent = renderSettings(containers);
  
  return (
    <>
    <ActionButton
          iconProps={{ iconName: "Settings" }}
          allowDisabledFocus
          disabled={false}
          onClick={openPanel}
        >
          Settings
        </ActionButton> 
        {isLoading?
          <section>
            <Spinner size={SpinnerSize.large} label={"Loading..."} />
          </section>           
          :
            <section>
              <Dropdown
                placeholder="Select an option"
                label={"Repository"}
                options={options}                
              />
            </section>
          }
        <div>
          {isFailed?
            <MessageBar        
            messageBarType={MessageBarType.error}
            isMultiline={true}
            onDismiss={dismissError}
            >
            this is an error        
            </MessageBar>
          :
          <></>}
        </div>
        <Pivot aria-label="Templates and Snippets">
          <PivotItem headerText={"Templates"} alwaysRender={true}>
           
          </PivotItem>
          <PivotItem headerText={"Snippets"} alwaysRender={true}>
            
          </PivotItem>
          <PivotItem headerText={"Search"} itemIcon="Search" alwaysRender={true}>
          </PivotItem>
        </Pivot>

        <Panel
        type={PanelType.custom}
        isOpen={isOpen}
        onDismiss={dismissPanel}
        onRenderFooterContent={onRenderFooterContent}
        isFooterAtBottom={true}
        closeButtonAriaLabel="Close"
        headerText={"Sample panel"}
        >
        {settingsContent}
      </Panel>
      
     
        
    </>
    );
}

function renderSettings(containers: sasUrl[]){
  return (<AZSettingsPanel containers={containers}></AZSettingsPanel>);
}

export default App2;

