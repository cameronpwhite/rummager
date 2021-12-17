import React, { useState, useEffect } from "react"
import { useHistory, useParams, Link } from 'react-router-dom'
import { createHaul, getHaulTags, getHauls, getHaul, updateHaulFetch } from './HaulManager.js'

export const HaulForm = () => {

    const history = useHistory()
    let { haulId } = useParams()
    const [haulTags, setHaulTags] = useState([])
    
    const [currentHaul, setCurrentHaul] = useState({
        description: "",
        image_path: "",
        dumpster: "",
        items: [""],
        tags: []
    })

    useEffect(() => {
        getHaulTags().then(setHaulTags)
    }, [])

    useEffect(() => {
        if (haulId) {
            getHaul(haulId).then((haulData) => setCurrentHaul({
                ...haulData,
                description: haulData.description,
                image_path: haulData.image_path,
                dumpster: haulData.dumpster.location,
                items: haulData.items.map(item => item.name),
                tags: haulData.tags.map(tag => tag.id)
            })
            )
        }
    }, [haulId])

    const handleDescriptionChange = (event) => {
        const newHaul = { ...currentHaul }
        newHaul.description = event.target.value
        setCurrentHaul(newHaul)
    }
    const handleImageChange = (event) => {
        const newHaul = { ...currentHaul }
        newHaul.image_path = event.target.value
        setCurrentHaul(newHaul)
    }
    const handleDumpsterChange = (event) => {
        const newHaul = { ...currentHaul }
        newHaul.dumpster = event.target.value
        setCurrentHaul(newHaul)
    }

    const handleItemChange = (i, e) => { 
        const newHaul = { ...currentHaul }
        newHaul.items[i] = e.target.value
        setCurrentHaul(newHaul)
    }

    const addItemField = () => {
        const newHaul = { ...currentHaul }
        newHaul.items = [ ...currentHaul.items, ""]
        setCurrentHaul(newHaul)
    }

    const removeItemField = (i) => {
        const newHaul = { ...currentHaul }
        newHaul.items.splice(i, 1)
        setCurrentHaul(newHaul)
    }

    const handleTagSelect = (tagId) => {
        
        const newHaul = { ...currentHaul }
        let selected = newHaul.tags
        let foundTag = selected.indexOf(tagId)

        if (foundTag > -1) {
            selected.splice(foundTag, 1)
            setCurrentHaul(newHaul)
        } else {
            selected.push(tagId)
            setCurrentHaul(newHaul)
        }
    }

    const updateHaul = (event) => {
        event.preventDefault()

        updateHaulFetch(currentHaul).then(() => {
            history.push('/myhauls')
        })
    }

    const saveHaul = (event) => {
        event.preventDefault()

        createHaul(currentHaul).then(() => {
            history.push('/myhauls')
        })
    }

return (
    <form className="haulForm">
        {
        haulId ?
            <h2 className="haulForm__title">Edit Haul</h2>
        :
            <h2 className="haulForm__title">Create New Haul</h2>
        }
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" value={currentHaul.description} required autoFocus className="form-control" onChange={(e) => handleDescriptionChange(e)} />
                <label htmlFor="image">Image URL:</label>
                <input type="text" name="image-url" value={currentHaul.image_path} required className="form-control" onChange={(e) => handleImageChange(e)}/>
                <label htmlFor="dumpster-location">(Optional) Dumpster Location:</label>
                <input type="text" name="dumpster-location" value={currentHaul.dumpster} required className="form-control" onChange={(e) => handleDumpsterChange(e)} />
                <label htmlFor="item">Items:</label>
                {currentHaul.items.map(
                    (item, index) => {
                        return (
                        <>
                        <input type="text" name={`item-{index}`} value={item || ""} onChange={e => handleItemChange(index, e)} required className="form-control" />
                        {
                            index > -1 ?
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
                        
                        return <li><input type="checkbox" name={tag.label} value={tag.id} onChange={() => handleTagSelect(tag.id)} checked={currentHaul.tags.includes(tag.id)} />{tag.label}</li>
                        
                    }
                )}
                </ul>
                </div>
                <button type="button" onClick={event => {
                    if (haulId) {
                        updateHaul(event)
                    } else {
                        saveHaul(event)
                    }
                }}>Submit</button>
                {
                <Link to={`/myhauls`}>
                <button type="button">Cancel</button>
                </Link>
                }   
            </div>
        </fieldset>
    </form>
)
}