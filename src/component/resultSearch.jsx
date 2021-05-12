import React from 'react';
import './result.css';


const ResultSearch = props => {
    return (
        <div className="card mx-1 my-2 bg-light" style={{ width: "18rem" }}>
            <img className="card-img-top" style={{ height: "300px", overflow: "clip" }} src={props.data.image} alt={props.data.title + " pic"} />
            <div className="card-body">
                <a href={props.data.link} target="blank" className="card-title">{props.data.title}</a>
                <div className="module line-clamp">
                    <p className="card-text">{props.data.synopsis}</p>
                </div>
            </div>
        </div>
        // <div style={{ width: `200px` }} class="m-2 bg-warning">{props.title}</div>
    )
}

export default ResultSearch;