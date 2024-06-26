import server from "../util/port";
import { v4 as uuidv4 } from 'uuid';

var id = uuidv4();

export const createqn = (username,surveyName,questions) => {
    return server({
        url:`/que/QnLogin?UserName=${username}`,
        method:'POST',
        data: {
            reception:{
                id: id,
                questionNaireName: surveyName,
                questionList: questions
            }
        },
    })
}