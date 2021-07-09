import React from "react";
import { Form } from "react-bootstrap";

function Filters(props) {
    return (
        <Form className="filter">
            <h3>Filters</h3>
            <div key='inline-radio' className="mb-3">
                <Form.Check inline label="All time" name="filterKey" value="allTime" type="radio" id={'default-radio-1'} onChange={props.handleChange}/>
                <Form.Check inline label="This week" name="filterKey" value="thisWeek" type="radio" id={'default-radio-2'} onChange={props.handleChange}/>
                <Form.Check inline label="This month" name="filterKey" type="radio" value="thisMonth" id={'default-radio-3'} onChange={props.handleChange}/>
                <Form.Check inline label="In next 3 months" name="filterKey" type="radio" value="in3Months" id={'default-radio-4'} onChange={props.handleChange}/>
            </div>
        </Form>
    )
}
export default Filters;