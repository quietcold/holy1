import server from "../util/port";
// 获取某指定问卷
export const getqn = (id) => {
    return server({
        url:'TODO',
        method:'POST',
        data:{
            id:id
        }
    })
}