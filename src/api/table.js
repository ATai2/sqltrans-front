import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function getTables(params){
  return request({
    url: '/tables',
    method: 'get',
    params
  })
}