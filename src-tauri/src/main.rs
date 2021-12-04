use std::fs;

#[tauri::command]
fn create_file(path: String, data: Option<String>)
{
    fs::write(path, data.unwrap_or("".to_string())).expect("File creation error");
}

fn main()
{
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![create_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
