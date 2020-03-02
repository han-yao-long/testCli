export default [{
        name: '计划组',
        treeNode: 1, //是否为一级节点 1为一级，2为二级（共两级）
        children: [], //是否有二级
        key: 1,
        open: false, //是否展开
        checked: true, //是否选中
    },
    {
        name: '计划组2',
        treeNode: 1, //是否为一级节点 1为一级，2为二级（共两级）
        key: 2,
        open: false, //是否展开
        checked: false, //是否选中
        children: [{
                name: '设备A',
                treeNode: 2, //是否为一级节点 1为一级，2为二级（共两级）
                isSurvey: true, //是否完成调研
                type: '计算单元', //计算单元/分向
                key: 5,
                open: false, //是否展开
                checked: false, //是否选中
            },
            {
                name: '设备B',
                treeNode: 2, //是否为一级节点 1为一级，2为二级（共两级）
                isSurvey: true, //是否完成调研
                type: '分向', //计算单元/分向
                key: 6,
                open: false, //是否展开
                checked: false, //是否选中
            },
            {
                name: '设备c',
                treeNode: 2, //是否为一级节点 1为一级，2为二级（共两级）
                isSurvey: false, //是否完成调研
                type: '分向', //计算单元/分向
                key: 7,
                open: false, //是否展开
                checked: false, //是否选中
            }
        ] //是否有二级
    },
    {
        name: '设备d',
        treeNode: 2, //是否为一级节点 1为一级，2为二级（共两级）
        isSurvey: false, //是否完成调研
        type: '分向', //计算单元/分向
        key: 3,
        open: false, //是否展开
        checked: false, //是否选中
    },
    {
        name: '设备f',
        treeNode: 2, //是否为一级节点 1为一级，2为二级（共两级）
        isSurvey: false, //是否完成调研
        type: '计算单元', //计算单元/分向
        key: 4,
        open: false, //是否展开
        checked: false, //是否选中
    },
    {
        name: '设备g',
        treeNode: 2, //是否为一级节点 1为一级，2为二级（共两级）
        isSurvey: false, //是否完成调研
        type: '分向', //计算单元/分向
        key: 9,
        open: false, //是否展开
        checked: false, //是否选中
    }
]