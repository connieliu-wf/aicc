const fs = require('fs');
const path = require('path');

// Directory containing icon files
const iconsDir = path.join(__dirname, 'src', 'icons');

// Read all files in the icons directory
fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter for TypeScript files (icon components)
  const iconFiles = files.filter(file => 
    file.endsWith('.tsx') && 
    !file.startsWith('index') && 
    !file.startsWith('types') &&
    !file.startsWith('Icon')
  );

  // Process each icon file
  iconFiles.forEach(file => {
    const filePath = path.join(iconsDir, file);
    
    // Read file content
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${file}:`, err);
        return;
      }

      // Extract component name from filename
      const componentName = file.replace('.tsx', '');
      
      // Check if displayName is already defined
      if (data.includes(`${componentName}.displayName`)) {
        console.log(`${componentName} already has displayName, skipping`);
        return;
      }

      // Check if the file ends with category definition
      if (data.includes(`${componentName}.category`)) {
        // Add displayName after category
        const updatedContent = data.replace(
          /(\n*)(.*\.category.*;\n*)$/,
          `$1$2$1${componentName}.displayName = '${componentName}';$1`
        );
        
        // Write updated content back to file
        fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
          if (err) {
            console.error(`Error writing to file ${file}:`, err);
            return;
          }
          console.log(`Added displayName to ${componentName}`);
        });
      } else {
        // Add displayName at the end of the file
        const updatedContent = `${data.trim()}\n\n${componentName}.displayName = '${componentName}';\n`;
        
        // Write updated content back to file
        fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
          if (err) {
            console.error(`Error writing to file ${file}:`, err);
            return;
          }
          console.log(`Added displayName to ${componentName}`);
        });
      }
    });
  });
}); 