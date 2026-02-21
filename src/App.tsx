import Dogs from "./components/dog";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Breed} from "./interfaces/breed";

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Breed[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        // @ts-ignore
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://dogapi.dog/api/v2/breeds");
            const {data} : {data: Breed[]} = await rawData.json();
            const breeds: Breed[] = data.map((item: any) => ({
                name: item.attributes.name,
                description: item.attributes.description,
                hypoallergenic: item.attributes.hypoallergenic,
            }));
            setData(breeds);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(
        <ParentDiv>
            <Dogs data={data}/>
        </ParentDiv>
    )
}



