import PropTypes from 'prop-types'

export const propTypes = {
    selectInstrument: PropTypes.func.isRequired,
    SelectedTickerDataBasic: PropTypes.object.isRequired,
    InstrumentsTickerData: PropTypes.object.isRequired
}

export const defaultProps = {
    selectInstrument: {},
    SelectedTickerDataBasic: {},
    InstrumentsTickerData: {},
}