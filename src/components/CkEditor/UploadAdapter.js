class UploadAdapter {
    constructor(loader) {
      this.loader = loader;
    }
  
    async upload() {
      return this.loader.file.then(async (file) => {
        const formData = new FormData();
        formData.append("upload", file);
  
        const response = await fetch("http://localhost:3000/ckeditor/upload-image", {
            
          method: "POST",
          body: formData,
        });
  
        const data = await response.json();
        return { default: data.url }; 
      });
    }
  
    abort() {
      console.log("Upload aborted");
    }
  }
  
  export default UploadAdapter;
  