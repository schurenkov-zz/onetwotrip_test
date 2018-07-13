import React from "react";

import {
  FormGroup,
  ControlLabel,
  FormControl,
  Row,
  Col
} from "react-bootstrap";

export default props => {
  const { options } = props;
  return (
    <Row className="show-grid">
      <Col xs={6} xsOffset={3}>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Выберите авиакомпанию</ControlLabel>
          <FormControl
            componentClass="select"
            placeholder="select"
            onChange={e => props.onSelect(e)}
          >
            <option value="all">Все авиакомпании</option>
            {options.map((val, i) => (
              <option key={i} value={val.carrier}>
                {val.carrier}
              </option>
            ))}
          </FormControl>
        </FormGroup>
      </Col>
    </Row>
  );
};
