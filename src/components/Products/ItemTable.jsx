import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { REMOVE_FROM_CART } from "../../state/ProductState/actionTypes";

const ItemTable = ({ item, dispatch }) => {
    const { _id, model, image, price } = item;


    return (
        <tr className=''>
            <td className="mr-3 w-24 h-24"><img className='h-24' src={image} alt="" /></td>
            <td className="pl-5 text-lg font-medium text-[#252525] bg[]">{model}</td>
            <td className="pl-5 text-lg font-medium text-[#252525] bg[]">{price} Taka</td>

            <td className="pl-5 cursor-pointer">
                <button onClick={() => dispatch({type: REMOVE_FROM_CART, payload: item})} >
                    <FaTrashAlt className='text-neutral hover:text-primary' size={20} />
                </button>
            </td>

        </tr>
    );
};

export default ItemTable;