import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem } from './actions';
import { StyledForm, StyledInput, StyledButton } from './styled';

class ShoppingForm extends Component {
  static propTypes = {
    adding: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { text } = this.state;
    const { adding } = this.props;
    if (text.length > 0) {
      adding(text);
    }
    this.setState({
      text: '',
    });
  };

  onChange = (event) => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { text } = this.state;
    return (
      <StyledForm onSubmit={this.onSubmit}>
        <StyledInput
          id="item-input"
          name="text"
          placeholder="What to buy?"
          value={text}
          onChange={this.onChange}
        />
        <StyledButton>Submit</StyledButton>
      </StyledForm>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    adding: (text) => {
      dispatch(addItem(text));
    },
  }),
)(ShoppingForm);
