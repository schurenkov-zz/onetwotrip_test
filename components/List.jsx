import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import moment from "moment";

const style = {
  card: {
    minHeight: 50,
    boxShadow:
      "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
    marginBottom: 10,
    padding: 10
  }
};

export default props => {
  moment.locale("ru");
  const { list } = props;
  return (
    <Row className="show-grid">
      {list.map((val, i) => (
        <Col key={i} xs={6} md={4}>
          <div style={style.card}>
            <p>
              <b>Маршрут:</b> {val.direction.from} - {val.direction.to}
            </p>
            <p>
              <b>Вылет:</b> {moment(val.arrival).format("DD.MM.YYYY hh:mm")}
            </p>
            <p>
              <b>Прилет:</b> {moment(val.departure).format("DD.MM.YYYY hh:mm")}
            </p>
            <p>
              <b>Авиакомпания:</b> {val.carrier}
            </p>
          </div>
        </Col>
      ))}
    </Row>
  );
};
