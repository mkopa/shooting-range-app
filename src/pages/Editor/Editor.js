import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

const styles = {
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};

class Editor extends React.Component {

    state = {
        checkedA: true,
        checkedB: true,
        data: [
            {
                enabled: true,
                name: 'Stanowisko nr 1',
                path: [
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-200', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-150', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                ],
                status: 'ready',
                points: 0,
                timeLeft: 130,
            },
            {
                enabled: true,
                name: 'Stanowisko nr 2',
                path: [
                    { name:'2-300', text: '2-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'2-300', text: '2-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'2-200', text: '2-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'2-150', text: '2-300', type: 'device', delay_before: 5, timeOut: 5 },
                ],
                status: 'ready',
                points: 0,
                timeLeft: 130,
            },
            {
                enabled: true,
                name: 'Stanowisko nr 3',
                path: [
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-200', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-150', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                ],
                status: 'ready',
                points: 0,
                timeLeft: 130,
            },
            {
                enabled: true,
                name: 'Stanowisko nr 4',
                path: [
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-200', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-150', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                ],
                status: 'ready',
                points: 0,
                timeLeft: 130,
            },
            {
                enabled: true,
                name: 'Stanowisko nr 5',
                path: [
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-200', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-150', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                ],
                status: 'ready',
                points: 0,
                timeLeft: 130,
            },
            {
                enabled: true,
                name: 'Stanowisko nr 6',
                path: [
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-200', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-150', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                ],
                status: 'ready',
                points: 0,
                timeLeft: 130,
            },
            {
                enabled: true,
                name: 'Stanowisko nr 7',
                path: [
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-200', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-150', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                ],
                status: 'ready',
                points: 0,
                timeLeft: 130,
            },
            {
                enabled: true,
                name: 'Stanowisko nr 8',
                path: [
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-200', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-150', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                ],
                status: 'ready',
                points: 0,
                timeLeft: 130,
            },
            {
                enabled: true,
                name: 'Stanowisko nr 9',
                path: [
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-300', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-200', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                    { name:'1-150', text: '1-300', type: 'device', delay_before: 5, timeOut: 5 },
                ],
                status: 'ready',
                points: 0,
                timeLeft: 130,
            },
        ],
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    renderStates = (data) => {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;
        if (data.length > 0) {
            return data.map((item) => {
                return (
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {item.name}
                            <Switch
                                checked={item.enabled}
                                // onChange={this.handleChange('checkedA')}
                                value="True"
                            />
                            <Button variant="outlined" color="primary" className={classes.button}>
                            Nowy
                        </Button>
                        </Typography>
                        
                        <Typography variant="h5" component="h2">
                        {/* {item.path.map(pt => {
                            const output;
                            if (pt.delay_before > 0) {
                                output+=<span>P1</span>
                            }
                            return({if (pt.delay_before > 0) return(<p>dupa</p>)});
                        })} */}
                            p5{bull}<b>1-300</b>{bull}p5{bull}1-300{bull}p5{bull}1-200{bull}p5{bull}1-150
                        </Typography>
                        <Typography component="p">
                            <span>Status: {item.status}</span>
                            <span>Punkty: {item.points}</span>
                            <span>Pozostało: {item.timeLeft}</span>
                        </Typography>
                    </CardContent>
                </Card>
                );
            });
        }
        return [];
    };

    render() {
        const data = this.renderStates(this.state.data);

        return (
            <section>
                { data }
            </section>
        );
    }
}

Editor.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Editor);