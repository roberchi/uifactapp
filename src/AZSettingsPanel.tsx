import { IconButton, Label, Stack, TextField } from "@fluentui/react";
import React from "react";


// setting for azure
export interface sasUrl {
  name: string;
  sasUrl: string;
}
export class azRepositoryManagerSettings {
  containers!: sasUrl[];
}

// state and property class
class azSettingPanelProperty extends azRepositoryManagerSettings {}
class azSettingPanelState extends azRepositoryManagerSettings {}

// setting panel for Azure Repository
export default class AZSettingsPanel extends React.Component<
  azSettingPanelProperty,
  azSettingPanelState
> {
  constructor(props: azSettingPanelProperty | Readonly<azSettingPanelProperty>) {
    super(props);
    this.state = {
      containers: this.props.containers ? this.props.containers : [],
    };
  }

  render() {
    return <>{this.renderPanel()}</>;
  }

  renderContainer(sas: sasUrl, index: number) {
    return (
      <Stack key={index}>
        <Stack.Item>
          <TextField
            label="Name"
            required
            value={sas.name}
            onChange={(_e, v) => {
              const containers = this.state.containers;
              containers[index].name = v as string;
              this.setState({ containers: containers });
            }}
          ></TextField>
          <IconButton iconProps={{ iconName: "delete" }} onClick={() => this.removeContainer(index)}></IconButton>
        </Stack.Item>
        <Stack.Item>
          <TextField
            label="SAS url"
            required
            value={sas.sasUrl}
            multiline
            rows={3}
            onChange={(_e, v) => {
              const containers = this.state.containers;
              containers[index].sasUrl = v as string;
              const name = this.getContainerFromSasUrl(v as string);
              if (name) containers[index].name = name;
              this.setState({ containers: containers });
            }}
          ></TextField>
        </Stack.Item>
      </Stack>
    );
  }
  getContainerFromSasUrl(v: string): string {
    try {
      const url = new URL(v);
      return url.pathname.length > 0 ? url.pathname.substring(1) : "";
    } catch (error) {
      return "";
    }
  }
  renderPanel() {
    const containers = this.state.containers?.map((c, i) => this.renderContainer(c, i));
    return (
      <div>
        <Label>
          Containers <IconButton iconProps={{ iconName: "add" }} onClick={() => this.addContainer()}></IconButton>
        </Label>
        {containers}
      </div>
    );
  }
  addContainer(): void {
    const containers = this.state.containers ? this.state.containers : [];
    containers.push({ name: "", sasUrl: "" });
    this.setState({ containers: containers });
  }
  removeContainer(i: number): void {
    const containers = this.state.containers;
    containers.splice(i, 1);
    this.setState({ containers: containers });
  }

  // return the value of the settings saved in the state
  getValue(): azRepositoryManagerSettings {
    return this.state;
  }
}
