import React, { useState } from 'react';
import '../Dropdown/select.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClickAwayListener from "@mui/material/ClickAwayListener";


export default function Select({ data }) {
    const [OpenSelect, setOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItems, setSelectedItems] = useState(data[0] || 'Select');
    const [listData,setlistData]=useState(data)
    const [listData2,setlistData2]=useState(data)

    const handleSelect = () => {
        setOpenSelect(!OpenSelect);
    };

    const closeSelect = (index, name) => {
        setSelectedIndex(index);
        setOpenSelect(false);
        setSelectedItems(name);
    };

    const filterList= (e) => {
      const keyword=e.target.value.toLowerCase()

      const list= listData2.filter((item) => {
        return item.toLowerCase().includes(keyword)
      }
      )
      setlistData(list)
    }
    

    return (
        <ClickAwayListener onClickAway={() => setOpenSelect(false)}>
            <div className="dropdown-parent">
                <div className="dropdown" onClick={handleSelect}>
                    <span>{selectedItems}</span>
                    <KeyboardArrowDownIcon className="down-arrow" />
                </div>

                {OpenSelect && (
                    <div className="selectdrop">
                        <div className="searchfield">
                            <input type="text" placeholder="Search..." 
                            onChange={filterList}/>
                        </div>
                        <ul className="searchresults">
                            {listData.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => closeSelect(index, item)}
                                    className={selectedIndex === index ? 'active' : ''}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </ClickAwayListener>
    );
}

