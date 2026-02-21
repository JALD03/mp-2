import styled from "styled-components";
import {Breed} from "../interfaces/breed";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: black;
`;

const SingleCharDiv=styled.div<{hypoallergenic: boolean}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props) => (props.hypoallergenic ? 'green' : 'blue')};
    color: ${(props) => (props.hypoallergenic ? 'black' : 'white')};
    border: 3px white solid;
    font-family: Arial, sans-serif;
    text-align: center;
`;

export default function Dogs(props : { data:Breed[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((breed: Breed) =>
                    <SingleCharDiv key={breed.name} hypoallergenic={breed.hypoallergenic}>
                        <h1>{breed.name}</h1>
                        <p>{breed.hypoallergenic ? "Hypoallergenic" : "Not Hypoallergenic"}</p>
                        <p>{breed.description}</p>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}
