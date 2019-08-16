var availableFields = [
    { name: "BusinessActivity", text: "BusinessActivity", type: "String" },
    { name: "Category", text: "Category", type: "Enum", enumeration: ["Series", "Files", "Item"] },
    { name: "CreatedDate", text: "CreatedDate", type: "DateTime" },
    { name: "CreatedBy", text: "CreatedBy", type: "String" },
    { name: "CreatingApplicationName", text: "CreatingApplicationName", type: "String" },
    { name: "CreatingApplicationVersion", text: "CreatingApplicationVersion", type: "String" },
    { name: "DocumentIdentifier", text: "DocumentIdentifier", type: "String" },
    { name: "DocumentTitle", text: "DocumentTitle", type: "String" },
    { name: "FileByteSize", text: "FileByteSize", type: "Number" },
    { name: "FileName", text: "FileName", type: "String" },
    { name: "FilePath", text: "FilePath", type: "String" },
    { name: "FormatExtension", text: "FormatExtension", type: "String" },
    { name: "FormatName", text: "FormatName", type: "String" },
    { name: "FormatRegistry", text: "FormatRegistry", type: "String" },
    { name: "FormatRegistryId", text: "FormatRegistryId", type: "String" },
    { name: "ModifiedDate", text: "ModifiedDate", type: "DateTime" },
    { name: "ModifiedBy", text: "ModifiedBy", type: "String" },
    { name: "ParentId", text: "ParentId", type: "String" },
    { name: "SecurityClassification", text: "SecurityClassification", type: "Enum", enumeration: ["Unclassified", "InConfidence  ", "Sensitive", "Restricted", "Confidential", "Secret", "TopSecret"] },
    { name: "SourceDataSource", text: "SourceDataSource", type: "String" },
    { name: "SourceLocation", text: "SourceLocation", type: "String" },
    { name: "VersionNumber", text: "VersionNumber", type: "String" }
];

var fieldTypes = [
    { name: "String", operators: ["Equal", "NotEqual", "StartsWith", "EndsWith", "Contains"] },
    { name: "DateTime", operators: ["Equal", "NotEqual", "LessThan", "LessThanOrEqual", "GreaterThan", "GreaterThanOrEqual"] },
    { name: "Number", operators: ["Equal", "NotEqual", "LessThan", "LessThanOrEqual", "GreaterThan", "GreaterThanOrEqual"] },
    { name: "Enum", operators: ["Equal", "NotEqual"] }
];
