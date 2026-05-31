export class NumberBaseConversion {
    /**
     * Convert a decimal number to its hexadecimal representation
     * @param decimalNumber - The decimal number to convert
     * @returns hexadecimal string representation
     */
    static decimalToHex(decimalNumber: number): string {
        if (!Number.isInteger(decimalNumber)) {
            throw new Error("Input must be an integer");
        }
        const hex = decimalNumber.toString(16).toUpperCase();
        return hex
    }

    /**
     * Convert a hexadecimal string to its decimal representation
     * @param hexString - The hexadecimal string to convert
     * @returns decimal number
     */
    static hexToDecimal(hexString: string): number {
        const cleaned = hexString.replace("0x", "").replace("0X", "").trim();
        const decimal = parseInt(cleaned, 16);
        if (isNaN(decimal)) {
            throw new Error("Invalid hexadecimal string");
        }
        return decimal
    }

    /**
     * Convert a decimal number to its binary representation
     * @param decimalNumber - The decimal number to convert
     * @returns binary string representation
     */
    static decimalToBinary(decimalNumber: number): string {
        if (!Number.isInteger(decimalNumber)) {
            throw new Error("Input must be an integer");
        }
        const binary = decimalNumber.toString(2);
        return binary
    }

    /**
     * Convert a binary string to its decimal representation
     * @param binaryString - The binary string to convert
     * @returns decimal number
     */
    static binaryToDecimal(binaryString: string): number {
        const cleaned = binaryString.replace("0b", "").replace("0B", "").trim();
        const decimal = parseInt(cleaned, 2);
        if (isNaN(decimal)) {
            throw new Error("Invalid binary string");
        }
        return decimal
    }

    /**
     * Convert a hexadecimal string to its binary representation
     * @param hexString - The hexadecimal string to convert
     * @returns binary string representation
     */
    static hexToBinary(hexString: string): string {
        const decimal = NumberBaseConversion.hexToDecimal(hexString);
        const binary = NumberBaseConversion.decimalToBinary(decimal);
        return binary
    }

    /**
     * Convert a binary string to its hexadecimal representation
     * @param binaryString - The binary string to convert
     * @returns hexadecimal string representation
     */
    static binaryToHex(binaryString: string): string {
        const decimal = NumberBaseConversion.binaryToDecimal(binaryString);
        const hex = NumberBaseConversion.decimalToHex(decimal);
        return hex
    }

    /**
     * Convert a hexadecimal string to an IEEE 754 floating-point number (big-endian)
     * @param hexString - The hexadecimal string in big-endian format (8 chars for float32, 16 chars for float64)
     * @param precision - "32" for single precision, "64" for double precision (default: "32")
     * @returns floating-point number
     */
    static hexToFloat(hexString: string, precision: "32" | "64" = "32"): number {
        const cleaned = hexString.replace("0x", "").replace("0X", "").trim().toUpperCase();
        const byteCount = precision === "32" ? 4 : 8;
        const buffer = new ArrayBuffer(byteCount);
        const view = new DataView(buffer);
        for (let i = 0; i < byteCount; i++) {
            view.setUint8(i, parseInt(cleaned.substring(i * 2, i * 2 + 2), 16));
        }
        return precision === "32" ? view.getFloat32(0, false) : view.getFloat64(0, false);
    }

    /**
     * Convert a binary string to an IEEE 754 floating-point number (big-endian)
     * @param binaryString - The binary string in big-endian format (32 bits for float32, 64 bits for float64)
     * @param precision - "32" for single precision, "64" for double precision (default: "32")
     * @returns floating-point number
     */
    static binaryToFloat(binaryString: string, precision: "32" | "64" = "32"): number {
        const cleaned = binaryString.replace("0b", "").replace("0B", "").trim();
        const byteCount = precision === "32" ? 4 : 8;
        const buffer = new ArrayBuffer(byteCount);
        const view = new DataView(buffer);
        for (let i = 0; i < byteCount; i++) {
            const byteStr = cleaned.substring(i * 8, i * 8 + 8);
            view.setUint8(i, parseInt(byteStr, 2));
        }
        return precision === "32" ? view.getFloat32(0, false) : view.getFloat64(0, false);
    }
}
