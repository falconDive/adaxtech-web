import { take, fork, call, put } from 'redux-saga/effects' // eslint-disable-line
import DATA_INFO_ACTION_TYPES from './../actions/data-info-action-types'
import { getDataInfoInProgress, getDataInfoCompleted } from './../actions/data-info-actions'

// import axios from 'axios'

function* _getDataInfo(payload) {
    yield put(getDataInfoInProgress())

    // Ajax Call
    // const response = yield call(axios, {
    //     method: `POST`,
    //     url: `request-url`,
    //     headers: {
    //         'content-type': 'application/json',
    //         Authorization: `bearer <bearer token here>`
    //     },
    //     data: `<data-object-request>`
    // })

    // Replace this with Ajax Call
    const Data = [
        { id: 1, name: `qwerty` },
        { id: 2, name: `asdfg` }
    ]
    console.log(Data, 'Dataxxxx')
    yield put(getDataInfoCompleted({
        Data,
        Code: 1,
        Message: `Successfully fetched data`
    }))
}

export default function* dataInfo() {
    while (true) {
        const { type, payload } = yield take([
            DATA_INFO_ACTION_TYPES.GET_DATA_INFO
        ])

        switch (type) {
            case DATA_INFO_ACTION_TYPES.GET_DATA_INFO:
                yield fork(_getDataInfo, payload)
                break
            default:
        }
    }
}