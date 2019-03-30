import UploadService from './UploadService';

export class UseUploadService {
    uploadFileToServer(data){
        return UploadService.getRestClient().post('/files', data);
    }
}