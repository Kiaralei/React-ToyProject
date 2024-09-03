import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export const AppSider = () => {
    
    return (
    <Menu>
        <SubMenu key="sub1" title={<span>导航一</span>}>
          <MenuItemGroup title="分组1">
            <Menu.Item key="1">选项1</Menu.Item>
            <Menu.Item key="2">选项2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="分组2">
            <Menu.Item key="3">选项3</Menu.Item>
            <Menu.Item key="4">选项4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
    </Menu>)
}