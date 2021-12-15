import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createHaul, getHaulTags, getHauls } from './HaulManager.js'

export const HaulForm = () => {

    const history = useHistory()
    const [haulTags, setHaulTags] = useState([])
    const [itemList, setItemList] = useState([""])
    
    const [currentHaul, setCurrentHaul] = useState({
        description: "",
        image_path: "",
        dumpster: "",
        items: [],
        tags: []
    })

    useEffect(() => {
        getHaulTags().then(setHaulTags)
    }, [])

    const handleItemChange = (i, e) => { 
        let newItems = [...itemList]
        newItems[i] = e.target.value
        setItemList(newItems)
    }

    const addItemField = () => {
        setItemList([...itemList, ""])
    }

    const removeItemField = (i) => {
        let newItemValues = [...itemList]
        newItemValues.splice(i, 1)
        setItemList(newItemValues)
    }

return (
    <form className="haulForm">
        <h2 className="haulForm__title">Create New Haul</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" required autoFocus className="form-control" />
                <label htmlFor="image">Image URL:</label>
                <input type="text" name="image-url" required className="form-control" />
                <label htmlFor="dumpster-location">(Optional) Dumpster Location:</label>
                <input type="text" name="dumpster-location" required className="form-control" />
                <label htmlFor="item">Items:</label>
                {itemList.map(
                    (item, index) => {
                        return (
                        <>
                        <input type="text" name={`haul-item-${index}`} value={item || ""} onChange={e => handleItemChange(index, e)} required className="form-control" />
                        {
                            index ?
                                <button type='button' onClick={() => removeItemField(index)}>Remove</button>
                            : null
                        }
                        </>
                        )
                    }
                )}
                <button type="button" onClick={() => addItemField()}>Add Item</button>
                <div className="form-tags">
                <label htmlFor="tags">Tags:</label>
                <ul className="tags-list">
                {haulTags.map(
                    tag => {
                        return <li><input type="checkbox" name={tag.label} value={tag.id} onChange={() => handleTagSelect(tag.id)} />{tag.label}</li>
                    }
                )}
                </ul>
                </div>
            </div>
        </fieldset>
    </form>
)
}