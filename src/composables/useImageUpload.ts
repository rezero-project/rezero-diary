import { reactive, ref } from "vue";

export function useImageUpload() {
  const selectedImage = ref<string | null>(null);
  const formData = reactive({
    title: "",
    content: "",
    createdAt: new Date().toISOString(),
    image_path: "",
    user_id: "",
  });

  const handleImageChange = (ev: Event) => {
    const file = (ev.target as HTMLInputElement).files?.[0];
    if (file) {
      formData.image_path = file.name;
      const reader = new FileReader();
      reader.onload = () => {
        selectedImage.value = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  return { selectedImage, formData, handleImageChange };
}
