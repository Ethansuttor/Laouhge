library IEEE;
use IEEE.STD_LOGIC_1164.ALL;
use IEEE.STD_LOGIC_ARITH.ALL;
use IEEE.STD_LOGIC_UNSIGNED.ALL;

entity ssd_driver is
    Port (
        clk     : in  STD_LOGIC;
        bcd_in  : in  STD_LOGIC_VECTOR(15 downto 0);  
        seg     : out STD_LOGIC_VECTOR(6 downto 0);   
        dp      : out STD_LOGIC;                      
        an      : out STD_LOGIC_VECTOR(3 downto 0)   
    );
end ssd_driver;

architecture Behavioral of ssd_driver is

    signal refresh_counter : STD_LOGIC_VECTOR(19 downto 0) := (others => '0');
    signal mux_sel : STD_LOGIC_VECTOR(1 downto 0);
    signal digit : STD_LOGIC_VECTOR(3 downto 0);

begin

    process(clk)
    begin
        if rising_edge(clk) then
            refresh_counter <= refresh_counter + 1;
        end if;
    end process;

    mux_sel <= refresh_counter(19 downto 18);

    process(mux_sel, bcd_in)
    begin
        case mux_sel is
            when "00" => digit <= bcd_in(3 downto 0);     
            when "01" => digit <= bcd_in(7 downto 4);
            when "10" => digit <= bcd_in(11 downto 8);
            when others => digit <= bcd_in(15 downto 12); 
        end case;
    end process;

    process(mux_sel)
    begin
        case mux_sel is
            when "00" => an <= "1110";
            when "01" => an <= "1101";
            when "10" => an <= "1011";
            when others => an <= "0111";
        end case;
    end process;

    process(digit)
    begin
        case digit is
            when "0000" => seg <= "1000000"; 
            when "0001" => seg <= "1111001"; 
            when "0010" => seg <= "0100100"; 
            when "0011" => seg <= "0110000"; 
            when "0100" => seg <= "0011001"; 
            when "0101" => seg <= "0010010"; 
            when "0110" => seg <= "0000010"; 
            when "0111" => seg <= "1111000"; 
            when "1000" => seg <= "0000000"; 
            when "1001" => seg <= "0010000"; 
            when others => seg <= "1111111"; 
        end case;
    end process;

    dp <= '1';

end Behavioral;
