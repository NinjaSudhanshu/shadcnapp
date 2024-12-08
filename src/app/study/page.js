"use client"
import React, { useEffect, useState } from 'react'

const Page = () => {



    // const array = [1, 2, 3, 4, 5]
    // console.log("array of numbers", array)

    // let min = Math.min(...array)
    // console.log("min of array ", min)

    // let max = Math.max(...array)
    // console.log("max of array ", max)

    const arr1 = ["1", "2", "3"]
    const arr2 = ["4", "5", "6"]
    const arr3 = [...arr1, ...arr2, "new"]
    // console.log("array1 ", arr3)


    const obj1 = {
        a: "1",
        b: "2"
    }
    const obj2 = {
        ...obj1,
        c: "3"
    }
    // console.log("object 1", obj1)
    // console.log("object", obj2)

    const [dyn, setDyn] = useState(
        {
            name: "Peter",
            description: "Hello 1 "
        }
    )
    // const [dyn1, setDyn1] = useState({
    //     ...dyn,
    //     value: ""
    // })
    // console.log("dyn ", dyn)
    // console.log("dyn 1", dyn1)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDyn((prev) => ({
            ...prev,
            [name]: value
        }))

    }
    // const handleChange = (e) => {
    //     const { name, value } = e.target; // Correctly destructure name and value
    //     setDyn((prev) => ({
    //         ...prev,
    //         [name]: value // Dynamically update the state
    //     }));
    // };
    useEffect(() => {
        console.log("new valaue", dyn)
    }, [dyn])
















    return (
        <div>
            hello
            <input type="text"
                value={dyn.name}
                name="name"
                onChange={handleChange}


            />
            <input type="text"
                name='description'
                value={dyn.description}
                onChange={handleChange}
            />

        </div>
    )
}

export default Page
