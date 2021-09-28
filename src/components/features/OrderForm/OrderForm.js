import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
//import {formatPrice} from '../../../utils/formatPrice';
//import {calculateTotal} from '../../../utils/calculateTotal';



const OrderForm = ({tripCost, options, setOrderOption}) => (
    <Row>
      {pricing.map((option) => (
        <Col md={4} key={option.id}>
          <OrderOption {...option} setOrderOption={setOrderOption} currentValue={options[option.id]}/>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options}/>
      </Col>
    </Row>
);

OrderForm.propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,
    pricing: PropTypes.array,
    setOrderOption: PropTypes.func,
};

export default OrderForm;