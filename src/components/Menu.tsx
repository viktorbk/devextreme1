import * as React from "react";
import * as ReactDOM from "react-dom";

export interface MenuProps { items: any }

export class Menu extends React.Component<MenuProps, {}> {

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
      return <div></div>;
  }
}
