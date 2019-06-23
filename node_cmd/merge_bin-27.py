import os
import os.path
from sys import argv


ff = b'\xff'

bin_tail = b'\x00\x00\x00\x3c'
#normal boot
magic_num = b'\x1c\xec\x57\xbe'

#18000 : 98304
#20000 : 131072
app_offset = 98304

boot_struct_len = 16# + 4 + 256 + 256 + 256

def merge_bin(ota_bin_file_patch, app_bin_file_name, output_file_name):
    try:
        ota_file = open(ota_bin_file_patch, 'rb')
        app_file = open(app_bin_file_name, 'rb')
        output_file = open(output_file_name, 'wb')
    except Exception as e:
        return False, str(e)
    
    output_file.flush()

    ota_bin = ota_file.read()
    app_bin = app_file.read()

    print'ota len: ', len(ota_bin)
    print'app len: ', len(app_bin)

    output_file.seek(0)
    #write boot struct
    output_file.write(app_bin[0:boot_struct_len])
    
    #write ota.bin into new file
    output_file.write(ota_bin[boot_struct_len: len(ota_bin) - 4])

    # fill \xff into empty flash block
    i = 0
    while i < app_offset:
        output_file.write(ff)
        i += 1
    
    output_file.seek(app_offset)
    #write magic num for app.bin
    output_file.write(magic_num)
    #write app.bin into new file
    output_file.write(app_bin[4: len(app_bin) - 4])
    
    #write start address into new file
    output_file.write(bin_tail)
    
    ota_file.close()
    app_file.close()
    output_file.close()
    
    return True, 'Succeed!'


if __name__ == "__main__":
    if len(argv) < 4:
        print"Too few param"
        print"Example: python merge_bin.py ota.bin app.bin output_file.bin"
    elif len(argv) > 4:
        print"Too much param"
        print"Example: python merge_bin.py ota.bin app.bin output_file.bin"
    else:
        result = merge_bin(argv[1], argv[2], argv[3])
        print result
    