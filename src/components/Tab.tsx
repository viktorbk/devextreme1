import * as React from "react";
import * as ReactDOM from "react-dom";

export interface TabProps { items: any }

export class Tab extends React.Component<TabProps, {}> {

  componentDidMount() {
    var menu = $(ReactDOM.findDOMNode(this));
    menu.dxMenu({
      dataSource: this.props.items,
      hideSubmenuOnMouseLeave: false,
      displayExpr: "name",
      onItemClick: (itm: any) => {
        console.log(itm.itemData);
      }
    }).dxMenu("instance");
  }

  render() {
      return <div>Tab</div>;
  }
}
