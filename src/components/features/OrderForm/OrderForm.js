import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderForm.scss';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../../features/OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
//import {formatPrice} from '../../../utils/formatPrice';
//import {calculateTotal} from '../../../utils/calculateTotal';



const OrderForm = ({tripCost, options, setOrderOption}) => (
    <Row>
      {pricing.map(({...option}) => (
        <Col key={option.id} md={4}>
          <OrderOption setOrderOption={setOrderOption} currentValue={options[options.id]} {...options}/>
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