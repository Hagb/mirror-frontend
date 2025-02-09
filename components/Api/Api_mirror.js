import Vue from 'vue'

const prefix = '/api'

export default {
  getMirror: params => {
    return (prefix + "/static/tunasync.json")
  },
  getIsoList: params => {
    return (prefix + "/static/isoinfo.json")
  },
}
