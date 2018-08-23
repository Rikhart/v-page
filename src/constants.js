const languages = {
    cn: {
        pageLength: '每页记录数 ',
        pageInfo: `当前显示第 #pageNumber# / #totalPage# 页（共#totalRow#条记录）`,
        first: '首页',
        previous: '«',
        next: '»',
        last: '尾页'
    },
    en: {
        pageLength: 'Page length ',
        pageInfo: 'Current #pageNumber# / #totalPage# （total #totalRow# records）',
        first: 'First',
        previous: '«',
        next: '»',
        last: 'Last'
    },
    es: {
        pageLength: 'Paginas ',
        pageInfo: 'Pagina #pageNumber# / #totalPage# （total #totalRow# items）',
        first: 'Primero',
        previous: '«',
        next: '»',
        last: 'Ultimo'
    },
    jp: {
        pageLength: 'ページごとの記録数',
        pageInfo: '現在の第 #pageNumber# / #totalPage# ページ（全部で #totalRow# 条の記録）',
        first: 'トップページ',
        previous: '«',
        next: '»',
        last: '尾のページ'
    }
};

const defaults = {
    totalRow: 0,
    info: true,
    pageSizeMenu: [10,20,50,100],
    language: 'cn',
    align: 'right'
};

export default {
    languages,
    defaults
};