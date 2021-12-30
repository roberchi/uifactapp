import React from 'react';
import './App.css';
//import { ActionButton, DefaultButton, IconButton, Label, Panel, PanelType, PrimaryButton, Stack, TextField } from "@fluentui/react";
import { ActionButton, DefaultButton, Dropdown, DropdownMenuItemType, IconButton, IDropdownOption, Label, MessageBar, MessageBarType, Panel, PanelType, Pivot, PivotItem, PrimaryButton, Spinner, SpinnerSize, Stack, TextField } from "office-ui-fabric-react";
import { useBoolean } from '@fluentui/react-hooks';
import { Breadcrumb } from '@fluentui/react/lib/Breadcrumb';

function App() {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);
  
  const onRenderFooterContent = React.useCallback(
    () => (
      <div>
        <PrimaryButton onClick={dismissPanel}>Save</PrimaryButton>
        <DefaultButton onClick={dismissPanel}>Test</DefaultButton>
      </div>
    ),
    [dismissPanel],
  );
  const settings = renderSettingContent(10);
  //const settings = renderSettingContent2(50);
  return (
    <>
    
    {true?
      <><div className='layoutHeader'>
          <ActionButton
            hidden={true}
            iconProps={{ iconName: "Settings" }}
            allowDisabledFocus
            disabled={false}
            onClick={openPanel}
          >
            Settings
          </ActionButton><Panel
            type={PanelType.custom}
            isOpen={isOpen}
            onDismiss={dismissPanel}
            onRenderFooterContent={onRenderFooterContent}
            isFooterAtBottom={true}
            closeButtonAriaLabel="Close"
            headerText={"Sample panel"}
          >
            {settings}
          </Panel>
          <Dropdown placeholder="Select an option"
            label="Basic uncontrolled example" options={[]}></Dropdown>
          <Breadcrumb
            items={[{ text: 'Files', key: 'Files' }, { text: 'Files', key: 'Files' }]}
            maxDisplayedItems={10}
            ariaLabel="Breadcrumb with items rendered as buttons"
            overflowAriaLabel="More links" />
        </div><div className='layoutMain'>
            <Pivot className="" aria-label="Basic Pivot">
              <PivotItem className="border pivotItemWithPreview" headerText='Templates'>
                <div className='pivotItemData'>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>

              
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #1</Label>
                  <Label>Data #10</Label>
                </div>
                <div className='pivotItemPreview'>
                  <Label>Preview</Label>
                </div>
              </PivotItem>
              <PivotItem headerText="Recent">
                <Label>Pivot #2</Label>
              </PivotItem>
              <PivotItem headerText="Shared with me">
                <Label>Pivot #3</Label>
              </PivotItem>
            </Pivot>
          </div></>
          :<Spinner className="center" label="Seriously, still loading..." ariaLive="assertive" labelPosition="top" />
    }       
    </>
    );
}

export default App;

function renderSettingContent2(len: number) {
  var items:number[] = new Array(len);
  for(var i = 0;i<items.length;i++) 
    items[i] = i;
  const item = items.map((i) => <Label>{i}</Label>);
  return(
    <>
    <Label>
      Containers <IconButton iconProps={{ iconName: "add" }}></IconButton>
    </Label>
    {item}
  </>);
}

function renderSettingContent(len: number) {
  var items:number[] = new Array(len);
  for(var i = 0;i<items.length;i++) 
    items[i] = i;
    
  const containers = items.map((i) => renderContainer(i));

  return(
    <>
    <Label>
      Containers <IconButton iconProps={{ iconName: "add" }}></IconButton>
    </Label>
    {containers}
  </>);
}

function renderContainer(index: number) {
  return (
    <Stack key={index}>
      <Stack.Item>
        <TextField
          label="Name"
          required
        ></TextField>
        <IconButton iconProps={{ iconName: "delete" }}></IconButton>
      </Stack.Item>
      <Stack.Item>
        <TextField
          label="Url"
          required        
          multiline
          rows={3}
        ></TextField>
      </Stack.Item>
    </Stack>
  );
}
