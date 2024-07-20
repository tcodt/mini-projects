import TreeViewItem from "./TreeViewItem";

export default function TreeViewList({ list = [] }) {
  return (
    <ul className="flex flex-col gap-4">
      {list && list.length
        ? list.map((listItem, index) => (
            <TreeViewItem key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
}
