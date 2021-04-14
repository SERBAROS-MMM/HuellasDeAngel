import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import File from '@material-ui/icons/AttachFile';

const styles = () => ({
    input: {
        display: 'none'
    }
});

class MediaCapture extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };    

    handleCaptureFile = ({ target }) => {
        const fileReader = new FileReader();
        const name = target.accept.includes('.docx,.doc,.pdf') ? '.docx,.doc,.pdf':

        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = (e) => {
            this.setState((prevState) => ({
                [name]: [...prevState[name], e.target.result]
            }));
        };
    };

    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <input
                    accept=".docx,.doc,.pdf"
                    className={classes.input}
                    id="icon-button-photo"
                    onChange={this.handleCaptureFile}
                    type="file"
                />
                <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span">
                        <File />
                    </IconButton>
                </label>
            </Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MediaCapture);