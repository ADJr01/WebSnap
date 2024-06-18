export default function (){
    function uuID(length=8) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
        const charactersLength = characters.length;
        let result = '';
        const array = new Uint8Array(length);
        window.crypto.getRandomValues(array);
        for (let i = 0; i < length; i++) {
            result += characters.charAt(array[i] % charactersLength);
        }
        return result;
    }

    function snom_parent_identity(){

    }

    return {
        uID:uuID,
    }
}