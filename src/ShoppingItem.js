import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteItem, editItem } from './actions';
import {
  StyledItem, StyledText, StyledIcon, StyledInput, StyledWrapper,
} from './styled';

class ShoppingItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    deletion: PropTypes.func.isRequired,
    edition: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isPurchased: false,
    };
    this.input = React.createRef();
  }

  setEditState() {
    this.setState({
      isEditing: true,
    });
  }

  setPurchaseState() {
    const { isPurchased } = this.state;
    if (isPurchased === true) {
      this.setState({
        isPurchased: false,
      });
    } else {
      this.setState({
        isPurchased: true,
      });
    }
  }

  onEditSubmit = () => {
    const { id, edition } = this.props;
    this.setState({
      isEditing: false,
    });
    edition(this.input.value, id);
  };

  render() {
    const { isEditing, isPurchased } = this.state;
    const { deletion, text, id } = this.props;
    return (
      <StyledItem>
        <StyledIcon
          onClick={() => {
            this.setPurchaseState();
          }}
        >
          <FontAwesomeIcon icon="check" />
        </StyledIcon>
        <StyledText isPurchased={isPurchased}>
          {isEditing ? (
            <StyledWrapper>
              <StyledInput
                defaultValue={text}
                ref={(value) => {
                  this.input = value;
                }}
                autoFocus
              />
              <StyledIcon onClick={this.onEditSubmit}>
                <FontAwesomeIcon icon="check" />
              </StyledIcon>
            </StyledWrapper>
          ) : (
            text
          )}
        </StyledText>
        <StyledIcon
          onClick={() => {
            this.setEditState();
          }}
        >
          <FontAwesomeIcon icon="edit" />
        </StyledIcon>
        <StyledIcon
          onClick={() => {
            deletion(id);
          }}
        >
          <FontAwesomeIcon icon="trash" />
        </StyledIcon>
      </StyledItem>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    deletion: (id) => {
      dispatch(deleteItem(id));
    },
    edition: (text, id) => {
      dispatch(editItem(text, id));
    },
  }),
)(ShoppingItem);
