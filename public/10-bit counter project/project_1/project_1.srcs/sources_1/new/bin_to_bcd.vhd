library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.STD_LOGIC_ARITH.ALL;
use IEEE.STD_LOGIC_UNSIGNED.ALL;

entity bin_to_bcd is
    Port (
        bin_in  : in  STD_LOGIC_VECTOR(9 downto 0);  
        bcd_out : out STD_LOGIC_VECTOR(15 downto 0)  
    );
end bin_to_bcd;

architecture Behavioral of bin_to_bcd is
    signal temp_bin : INTEGER range 0 to 1023;
    signal thousands, hundreds, tens, ones : INTEGER range 0 to 9;
begin

    process(bin_in)
    begin
        temp_bin <= CONV_INTEGER(bin_in);

        thousands <= temp_bin / 1000;
        hundreds <= (temp_bin mod 1000) / 100;
        tens <= (temp_bin mod 100) / 10;
        ones <= temp_bin mod 10;

        bcd_out <= CONV_STD_LOGIC_VECTOR(thousands, 4) &
                   CONV_STD_LOGIC_VECTOR(hundreds, 4) &
                   CONV_STD_LOGIC_VECTOR(tens, 4) &
                   CONV_STD_LOGIC_VECTOR(ones, 4);
    end process;

end Behavioral;
