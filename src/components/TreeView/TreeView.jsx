import TreeViewList from "./TreeViewList";

export default function TreeView({ menus = [] }) {
  return (
    <div>
      <TreeViewList list={menus} />
    </div>
  );
}
