import React, { useState } from "react";
import ReactDOM from "react-dom";



export default function NimrodStyle() {
    const defaultList = [
        { name: "ItemOne" },
        { name: "ItemTwo" },
        { name: "ItemThree" }
    ];

    const [list, updateList] = useState(defaultList);

    const handleRemoveItem = (e) => {
        const name = e.target.getAttribute("name")
        updateList(list.filter(item => item.name !== name));
    };

    return (
        <div>
            {list.map(item => {
                return (
                    <>
                        <span name={item.name} onClick={handleRemoveItem}>
                            x
            </span>
                        <span>{item.name}</span>
                    </>
                );
            })}
        </div>
    );
};